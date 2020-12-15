import Layout from "./Layout.vue";
import ColorTable from "../components/ColorTable.vue";
import AllColors from "../components/AllColors.vue";
import FontsTable from "../components/FontsTable.vue";
import Section from "../components/Section.vue";
import Row from "../components/Row.vue";
import Column from "../components/Column.vue";
import "./app.scss";

export default {
  Layout,
  NotFound: () => "custom 404",
  enhanceApp({ app, router, siteData }) {
    app.component("ColorTable", ColorTable);
    app.component("AllColors", AllColors);
    app.component("FontsTable", FontsTable);
    app.component("Section", Section);
    app.component("Row", Row);
    app.component("Column", Column);
  },
};
