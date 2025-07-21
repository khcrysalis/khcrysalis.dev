export default function anchors() {
    return function (tree) {
        tree.children
            .filter(node => node.type === 'element' && /^h[1-6]$/.test(node.tagName))
            .forEach(heading => {
                heading.children.push({
                    type: 'element',
                    tagName: 'a',
                    properties: {
                        href: `#${heading.properties.id}`,
                        class: 'anchor',
                        'aria-hidden': 'true',
                    },
                    children: [{ type: 'text', value: '#' }],
                });
            });
    };
}
