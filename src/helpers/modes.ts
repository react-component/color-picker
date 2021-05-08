const modes = ['RGB', 'HSL'] as const

export type Mode = (typeof modes)[number]

export default modes
