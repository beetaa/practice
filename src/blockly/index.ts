/**
 * 定义自己的 Block
 * 
 * - custom_length，返回指定字符串的长度
 * - custom_console，在 console 中输出一段固定的内容
 * - 
 */

/**
 * custom_length
 * 
 * 外观：
 * 代码：
 */
Blockly.Blocks['custom_length'] = {
  init: function () {
    this.appendValueInput('VALUE')
        .setCheck('String')
        .appendField('字符串长度')
    this.setOutput(true, 'Number')
    this.setColour(160)
    this.setTooltip('返回指定字符串的长度')
    this.setHelpUrl('http://www.baidu.com/length')
  }
}

Blockly.JavaScript['custom_length'] = function(block: any) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\''
  return [argument0 + '.length', Blockly.JavaScript.ORDER_MEMBER]
}

Blockly.Blocks['custom_print'] = {
  init: function () {
    this.appendValueInput('TEXT')
        .appendField('Console.log')
    this.setColour(260)
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setTooltip('在 Console 中输出内容')
    this.setHelpUrl('http://www.baidu.com/print')
  }
}

Blockly.JavaScript['custom_print'] = function(block: any) {
  var msg = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '\'\''
  return `document.getElementById('tb').innerText = ${msg}\n`
}

namespace customBlocks {
  const button: HTMLButtonElement = document.createElement('button')
  button.innerText = '运行'
  
  const textBox: HTMLTextAreaElement = document.createElement('textarea')
  textBox.setAttribute('id', 'tb')
  textBox.setAttribute('style', 'width: 100%;')
  textBox.setAttribute('rows', '4')
  
  const runningDiv: HTMLElement = document.getElementById('runningDiv')
  runningDiv.innerHTML = ''
  runningDiv.appendChild(button)
  runningDiv.appendChild(textBox)
  
  const toolbox_text: string = `
  <xml id="toolbox-simple" style="display: none">
    <block type="controls_ifelse"></block>
    <block type="controls_repeat_ext">
      <value name="TIMES">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="logic_boolean"></block>
    <block type="custom_length"></block>
    <block type="custom_print"></block>
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text"></block>
  </xml>
  `
  
  const workspace: Blockly.Workspace = Blockly.inject('blocklyDiv', {
    media: 'lib/media/',
    toolbox: toolbox_text,
    zoom: {
      startScale: 1
    }
  })
  
  button.onclick = () => {
    Blockly.JavaScript.addReservedWords('code')
    const code = Blockly.JavaScript.workspaceToCode(workspace)
    try {
      eval(code);
    } catch (e) {
      alert(e);
    }
  }
}
