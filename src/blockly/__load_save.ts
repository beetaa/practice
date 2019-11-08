/**
 * 加载和保存 Workspace
 * 
 * - 加载
 */

namespace load_save {
  const runningDiv: HTMLElement = document.getElementById('runningDiv')

  const button: HTMLButtonElement = document.createElement('button')
  button.innerText = 'Workspace -> XML'
  
  const textBox: HTMLTextAreaElement = document.createElement('textarea')
  textBox.setAttribute('style', 'width: 100%;')
  textBox.setAttribute('rows', '6')
  
  runningDiv.innerHTML = ''
  runningDiv.appendChild(button)
  
  const origin_text: string = `
  <xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
      <variable id=":,O)B{Ob6^C}d+ixwG..">abc</variable>
      <variable id="_4z:EsJulavi2^y5dvv">rrr</variable>
    </variables>
    <block type="variables_set" id="v1#Bjdj{!M88Tig%FU.R" x="93" y="46">
      <field name="VAR" id=":,O)B{Ob6^C}d+ixwG..">abc</field>
      <value name="VALUE">
        <block type="math_number" id="pxTrjFT0lbzOAuP-$w7">
          <field name="NUM">123</field>
        </block>
      </value>
      <next>
        <block type="text_print" id="},0r=EPb+ZF4|u{C|(3z">
          <value name="TEXT">
            <shadow type="text" id="Top)zb,FatTo$6q6DM6(">
              <field name="TEXT">abc</field>
            </shadow>
            <block type="variables_get" id="Xsq5K%6TX{e92.MF2Zs*">
              <field name="VAR" id=":,O)B{Ob6^C}d+ixwG..">abc</field>
            </block>
          </value>
          <next>
            <block type="controls_if" id=")NqyI]6j65{^;F-2winT">
              <mutation else="1"/>
              <value name="IF0">
                <shadow type="logic_boolean" id="=L4l1l=7|JZh,3a++=MI">
                  <field name="BOOL">TRUE</field>
                </shadow>
              </value>
              <statement name="DO0">
                <block type="controls_repeat_ext" id="rZzk@IDA-k*4eR=@hi0w">
                  <value name="TIMES">
                    <shadow type="math_number" id="IP?HNlRttZZZ0e!(]ovN">
                      <field name="NUM">10</field>
                    </shadow>
                  </value>
                  <statement name="DO">
                    <block type="text_print" id="n%$Z~nDa[)3#]}LvNKy">
                      <value name="TEXT">
                        <shadow type="text" id="t6tluJ%sVzwSo117E7J*">
                          <field name="TEXT">abc</field>
                        </shadow>
                      </value>
                    </block>
                  </statement>
                </block>
              </statement>
              <statement name="ELSE">
                <block type="variables_set" id="B)v9Ixj(CL4G,4Af(%">
                  <field name="VAR" id="_4z:EsJulavi2^y5dvv">rrr</field>
                  <value name="VALUE">
                    <block type="lists_create_with" id="zE,d5qyFd-DC[{l0LbE">
                      <mutation items="3"/>
                      <value name="ADD0">
                        <shadow type="math_number" id="N~j+XZQkPgnCf2~jqh?%">
                          <field name="NUM">1</field>
                        </shadow>
                      </value>
                      <value name="ADD1">
                        <shadow type="math_number" id="lp=-r:yvP$5Q*U6#na^^">
                          <field name="NUM">2</field>
                        </shadow>
                      </value>
                      <value name="ADD2">
                        <shadow type="math_number" id="qb!]^NxK4jSLeVQxGYjp">
                          <field name="NUM">3</field>
                        </shadow>
                      </value>
                    </block>
                  </value>
                  <next>
                    <block type="text_print" id="zO.9Wg+A-dZDNU68[">
                      <value name="TEXT">
                        <shadow type="text" id="u)W@Uj)cMpPFov9H_hRY">
                          <field name="TEXT">abc</field>
                        </shadow>
                        <block type="variables_get" id="0F3O(;^4zA8$^OpYflP5">
                          <field name="VAR" id="_4z:EsJulavi2^y5dvv">rrr</field>
                        </block>
                      </value>
                    </block>
                  </next>
                </block>
              </statement>
            </block>
          </next>
        </block>
      </next>
    </block>
  </xml>
  `
  
  const workspaceCode: Blockly.Workspace = Blockly.inject('blocklyDiv', {
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
  
  let origin_xml: Element = Blockly.Xml.textToDom(origin_text)
  Blockly.Xml.domToWorkspace(origin_xml, workspaceCode)
  
  button.onclick = () => {
    let xml = Blockly.Xml.workspaceToDom(workspaceCode)
    let xml_text_workspace = Blockly.Xml.domToPrettyText(xml)
    alert(xml_text_workspace)
    textBox.innerText = xml_text_workspace
    runningDiv.innerHTML = ''
    runningDiv.appendChild(button)
    runningDiv.appendChild(textBox)
  }
}
