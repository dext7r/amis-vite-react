/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-25 13:06:49
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-25 13:39:00
 * @FilePath: /amis-vite-react/src/Amis.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import { useState } from "react";
import { Editor } from "amis-editor";
import { render as renderAmis } from "amis";
import { SchemaObject } from "amis/lib/Schema";
import "amis/lib/themes/default.css";
import "amis/lib/helper.css";
import "amis/sdk/iconfont.css";
import "amis-editor-core/lib/style.css";
import "amis-ui/lib/themes/cxd.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
export function Amis() {
  const [mobile, setMobile] = useState(false);
  const [preview, setPreview] = useState(false);

  // @ts-ignore
  const defaultSchema: SchemaObject = window["AMIS_JSON"] || {
    type: "page",
    body: "测试",
    title: "标题",
  };

  const [schema,] = useState(defaultSchema);

  let obj: any = defaultSchema;

  const onChange = (value: any) => {
    obj = value;
    console.log("change", obj);
  };

  const onSave = () => {
    console.log("保存", obj);
    // @ts-ignore
    window["saveAmis"] && window["saveAmis"](obj);
  };

  return (
    <div style={{ height: "100% !important" }}>
      <div style={{ padding: "10px", paddingBottom: "0px", borderBottom: "1px solid #ddd" }}>
        <div>
          {renderAmis({
            type: "form",
            mode: "inline",
            title: "",
            wrapWithPanel: false,
            body: [
              {
                "type": "link",
                "value": "http://www.baidu.com/",
                "id": "u:5b9cb3219d15",
                "href": "https://github.com/h7ml/amis-vite-react",
                "body": "amis-vite-react",
                "blank": true,
                "icon": ""
              },
              {
                type: "switch",
                option: "预览",
                name: "preview",
                onChange: function (v: any) {
                  setPreview(v);
                },
              },
              {
                type: "switch",
                option: "移动端",
                name: "mobile",
                onChange: function (v: any) {
                  setMobile(v);
                },
              },
              {
                type: "button",
                label: "保存",
                level: "primary",
                onClick: function () {
                  onSave();
                },
              },
              {
                type: "button",
                label: "退出",
                level: "danger",
                onClick: function () {
                  if (window.confirm("确定退出?")) {
                    window.close();
                  }
                },
              },
            ],
          })}
        </div>
      </div>
      <Editor
        // style={{ height: "calc(100% - 60px) !important" }}
        preview={preview}
        isMobile={mobile}
        onChange={onChange}
        value={schema}
        theme={"cxd"}
        onSave={onSave}
      />
    </div>
  );
}

export default Amis;
