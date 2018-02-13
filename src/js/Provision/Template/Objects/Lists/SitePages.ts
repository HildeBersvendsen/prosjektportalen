import RESOURCE_MANAGER from "../../../../@localization";
import { IList } from "sp-pnp-provisioning/lib/schema";

const SitePages: IList = {
    Title: RESOURCE_MANAGER.getResource("Lists_SitePages_Title"),
    Description: "",
    Template: 119,
    ContentTypesEnabled: true,
    ContentTypeBindings: [{
        ContentTypeID: "0x010109010058561F86D956412B9DD7957BBCD67AAE01",
    }],
    AdditionalSettings: {
        EnableVersioning: true,
    },
};

export default SitePages;
