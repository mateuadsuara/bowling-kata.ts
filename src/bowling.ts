const ALL_PINS = 10

export function score(rolls: number[], frame: number = 1): number {
    if (rolls.length <= 1) {
        return rolls[0] || 0
    }

    const isStrike = rolls[0] == ALL_PINS
    const isSpare = rolls[0] + rolls[1] == ALL_PINS

    if (frame == 10) {
        const throwsInFrame = isStrike || isSpare ? 3 : 2
        const rollsInFrame = rolls.slice(0, throwsInFrame)
        return rollsInFrame.reduce((acc, n) => acc + n, 0)
    }

    if (isStrike) {
        const frameScore = rolls[0]
        const rest = rolls.slice(1)
        const firstBonus = rolls[1]
        const secondBonus = rolls[2] || 0
        return frameScore + firstBonus + secondBonus + score(rest, frame + 1)
    }

    const frameScore = rolls[0] + rolls[1]
    const rest = rolls.slice(2)

    if (isSpare) {
        const bonus = rolls[2] || 0
        return frameScore + bonus + score(rest, frame + 1)
    }

    return frameScore + score(rest, frame + 1)
}