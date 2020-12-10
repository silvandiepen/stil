import Layout from "./Layout.vue";
import ColorTable from "../components/ColorTable.vue";
import "./default.css";

export default {
  Layout,
  components: {
    ColorTable,
  },
  NotFound: () => "custom 404",
  enhanceApp({ app, router, siteData }) {
    console.log(app);
    app.component("ColorTable", ColorTable);
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  },
};
