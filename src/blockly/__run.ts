/**
 * 运行 Workspace
 * 
 * - 
 */

namespace run {
  const button: HTMLButtonElement = document.createElement('button')
  button.innerText = '运行'
  
  const runningDiv: HTMLElement = document.getElementById('runningDiv')
  runningDiv.innerHTML = ''
  runningDiv.appendChild(button)
  
  const workspace_text: string = `
  <xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
      <variable id=":,O)B{Ob6^C}d+ixwG..">abc</variable>
      <variable id="_4z:EsJulavi2^y5dvv">rrr</variable>
    </variables>
    <block type="variables_set" id="rqISY-GiQ$6[^rR0|0=S" x="76" y="99">
      <field name="VAR" id=":,O)B{Ob6^C}d+ixwG..">abc</field>
      <value name="VALUE">
        <block type="math_number" id="(SNYp_*MsjYl3]f-*1es">
          <field name="NUM">123</field>
        </block>
      </value>
      <next>
        <block type="text_print" id="zO.9Wg+A-dZDNU68[">
          <value name="TEXT">
            <shadow type="text" id="u)W@Uj)cMpPFov9H_hRY">
              <field name="TEXT">abc</field>
            </shadow>
            <block type="variables_get" id="0F3O(;^4zA8$^OpYflP5">
              <field name="VAR" id=":,O)B{Ob6^C}d+ixwG..">abc</field>
            </block>
          </value>
        </block>
      </next>
    </block>
  </xml>
  `
  
  const workspace: Blockly.Workspace = Blockly.inject('blocklyDiv', {
    media: 'lib/media/',
    toolbox: document.getElementById('toolbox-categories'),
    toolboxOptions: {
      color: true,
      inverted: true
    },
    zoom: {
      startScale: 1.0
    }
  })
  
  let workspace_xml: Element = Blockly.Xml.textToDom(workspace_text)
  Blockly.Xml.domToWorkspace(workspace_xml, workspace)
  
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
