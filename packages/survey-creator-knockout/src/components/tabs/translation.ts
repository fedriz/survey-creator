import * as ko from "knockout";
import { TabTranslationPlugin } from "@survey/creator";
import { ImplementorBase } from "survey-knockout-ui";
import { Base } from "survey-core";
import "./translation.scss";
var templateHtml = require("./translation.html");
var groupTemplateHtml = require("./translation-group.html");

ko.components.register("svc-tab-translation", {
  viewModel: {
    createViewModel: (params: any, componentInfo: any) => {
      const plugin: TabTranslationPlugin = params.data;
      new ImplementorBase(plugin.model);
      plugin.model.onTranslationObjCreated = (obj: Base) => {
        new ImplementorBase(obj);
      };
      return plugin.model;
    },
  },
  template: templateHtml,
});
ko.components.register("svd-translation-group", {
  viewModel: {
    createViewModel: (params, componentInfo) => {
      var model = params.model;
      return model;
    },
  },
  template: groupTemplateHtml,
});
