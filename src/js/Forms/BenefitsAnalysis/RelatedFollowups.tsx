import __ from "../../Resources";
import * as React from "react";
import * as Util from "../../Util";
import { ChromeTitle, ModalLink } from "../../WebParts/@Components";

const FollowupElement = ({ data }) => {
    let dispFormUrl = `../../${__.getResource("DefaultView_BenefitsFollowup_Url")}?ID=${data.ID}`.replace("AllItems", "DispForm");
    return (
        <li>
            <h3>
                <ModalLink
                    label={Util.dateFormat(data.GtMeasurementDate, "LL")}
                    url={dispFormUrl}
                    options={{ HideRibbon: true }} />
            </h3>
            <p className="ms-metadata"><b>{__.getResource("SiteFields_GtMeasurementValue_DisplayName")}:</b> {data.GtMeasurementValue}</p>
            <p
                className="ms-metadata"
                hidden={!Comment}><b>{__.getResource("String_Comment")}:</b> {data.GtMeasurementComment}</p>
        </li>
    );
};

export const RelatedFollowups = ({ followups }) => {
    return (
        <div>
            <ChromeTitle title={__.getResource("Lists_BenefitsFollowup_Title")} />
            <ul className="pp-simpleList" style={{ width: "300px" }}>
                {followups.map((e, idx) => <FollowupElement key={idx} data={e} />)}
            </ul>
        </div>
    );
};
