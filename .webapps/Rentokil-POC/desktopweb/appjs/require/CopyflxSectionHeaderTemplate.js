define("CopyflxSectionHeaderTemplate", function() {
    return function(controller) {
        var CopyflxSectionHeaderTemplate = new voltmx.ui.FlexContainer({
            "autogrowMode": voltmx.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "CopyflxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": voltmx.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopysknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "Rentokil-POC"
        }, {
            "paddingInPixel": false
        }, {});
        CopyflxSectionHeaderTemplate.setDefaultUnit(voltmx.flex.DP);
        var lblHeading = new voltmx.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "CopysknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyflxSectionHeaderTemplate.add(lblHeading);
        return CopyflxSectionHeaderTemplate;
    }
})