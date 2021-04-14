const urlAttrs = ['src', 'href']

const toRelative = p => p.startsWith('.') ? p : `.${p}`

module.exports = () => tree => {
    tree.walk(node => {
        if (typeof node !== 'object') return node
        const { attrs } = node
        if (typeof attrs !== 'object') return node
        return {
            ...node,
            attrs: Object.fromEntries(Object.entries(attrs).map(nameValue => {
                const [name, value] = nameValue
                if (!urlAttrs.includes(name)) return nameValue
                return [name, toRelative(value)]
            }))
        }
    })
}