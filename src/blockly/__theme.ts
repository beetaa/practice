/**
 * Theme - 定义和应用主题
 * 
 * - 
 */

const blockStyles = {
  "colour_blocks": {
    "colourPrimary": "#a5745b",
    "colourSecondary": "#dbc7bd",
    "colourTertiary": "#845d49"
  },
  "list_blocks": {
    "colourPrimary": "#745ba5",
    "colourSecondary": "#c7bddb",
    "colourTertiary": "#5d4984"
  },
  "logic_blocks": {
    "colourPrimary": "#5b80a5",
    "colourSecondary": "#bdccdb",
    "colourTertiary": "#496684"
  },
  "loop_blocks": {
    "colourPrimary": "#5ba55b",
    "colourSecondary": "#bddbbd",
    "colourTertiary": "#498449"
  },
  "math_blocks": {
    "colourPrimary": "#5b67a5",
    "colourSecondary": "#bdc2db",
    "colourTertiary": "#495284"
  },
  "procedure_blocks": {
    "colourPrimary": "#995ba5",
    "colourSecondary": "#d6bddb",
    "colourTertiary": "#7a4984"
  },
  "text_blocks": {
    "colourPrimary": "#5ba58c",
    "colourSecondary": "#bddbd1",
    "colourTertiary": "#498470"
  },
  "variable_blocks": {
    "colourPrimary": "#aaa",
    "colourSecondary": "#dbbdd6",
    "colourTertiary": "#84497a"
  },
  "variable_dynamic_blocks": {
    "colourPrimary": "#aaa",
    "colourSecondary": "#dbbdd6",
    "colourTertiary": "#84497a"
  },
  "hat_blocks": {
    "colourPrimary": "#a55b99",
    "colourSecondary": "#dbbdd6",
    "colourTertiary": "#84497a",
    "hat": "cap"
  }
}

const categoryStyles = {
  "colour_category": {
    "colour": "#a5745b"
  },
  "list_category": {
    "colour": "#745ba5"
  },
  "logic_category": {
    "colour": "#5b80a5"
  },
  "loop_category": {
    "colour": "#5ba55b"
  },
  "math_category": {
    "colour": "#5b67a5"
  },
  "procedure_category": {
    "colour": "blue"
  },
  "text_category": {
    "colour": "#5ba58c"
  },
  "variable_category": {
    "colour": "#aaaaaa"
  },
  "variable_dynamic_category": {
    "colour": "#a55b99"
  }
}

const customTheme = new Blockly.Theme(blockStyles, categoryStyles)

// 该特性尚未合并至 pxt-blockly
// theme.setComponentStyle('workspace', '#1e1e1e')
// theme.setComponentStyle('toolbox', '#333')
// theme.setComponentStyle('toolboxText', '#fff')
// theme.setComponentStyle('flyout', '#252526')
// theme.setComponentStyle('flyoutText', '#ccc')
// theme.setComponentStyle('flyoutOpacity', 1)
// theme.setComponentStyle('scrollbar', '#797979')
// theme.setComponentStyle('scrollbarOpacity', 0.4)

const workspaceTheme = Blockly.inject('blocklyDiv', {
  media: 'lib/media/',
  toolbox: document.getElementById('toolbox-categories'),
  toolboxOptions: {
    color: true,
    inverted: true
  },
  theme: customTheme
})