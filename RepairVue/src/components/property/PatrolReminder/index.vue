
<template>
    <div data-role="page" id="page">
      <div data-role="content">
        <form>
          <div class="ui-body ui-body-b">
            <div data-role="fieldcontain">
              <center>
                <h3>JPushPlugin Example</h3>
              </center>
              <span name="alias" id="alias"></span>
              <hr/>
              <label>RegistrationID: </label>
              <label id="registrationId">null</label>
            </div>
            <div data-role="fieldcontain">
              <label>Tags: </label>
              <table>
                <tr>
                  <td>
                    <input type="text" id="tagText1" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="tagText2" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" id="tagText3" />
                  </td>
                </tr>
              </table>
              <label>Alias: </label>
              <table>
                <tr>
                  <td>
                    <input type="text" id="aliasText" />
                  </td>
                </tr>
              </table>
            </div>

            <div data-role="fieldcontain">
              <input type="button" id="setTags" value="Set tags" />
              <input type="button" id="getAllTags" value="Get all tags" />
              <input type="button" id="cleanTags" value="Clean tags" />
            </div>
              
            <div data-role="fieldcontain">
              <input type="button" id="setAlias" value="Set alias" />
              <input type="button" id="getAlias" value="Get alias" />
              <input type="button" id="deleteAlias" value="Delete alias" />
            </div>

            <div data-role="fieldcontain">
              <label id="tagsPrompt">设置 Tag 的结果:</label>
              <label id="tagsResult">第一条信息</label>
            </div>
            <div data-role="fieldcontain">
              <label id="aliasPrompt">设置 Alias 的结果:</label>
              <label id="aliasResult">第二条信息</label>
            </div>
            <div data-role="fieldcontain">
              <label id="notificationPrompt">接受的通知内容:</label>
              <label id="notificationResult">第三条信息</label>
            </div>
            <div data-role="fieldcontain">
              <label id="messagePrompt">接受的自定义消息:</label>
              <label id="messageResult">第四条信息</label>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>
<link rel="stylesheet" href="../../../assets/property/css/jquery.mobile-1.1.1.css">
<script type="text/javascript" src="../../../assets/property/js/jquery.js"></script>
<script type="text/javascript" src="../../../assets/property/js/jquery.mobile-1.1.1.js"></script>
<script type="text/javascript" src="../../../assets/property/js/cordova.js"></script>
<script type="text/javascript" src="../../../assets/property/js/xunjian.js"></script>
