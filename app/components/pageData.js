export function preparePageInfo(page, topicPages) {
    console.log("Preparing data for page", page);
    const pageInfo = topicPages.filter(topicPage => {
        //console.info("In pageData>page filter 2", topicPage);       
        return topicPage.page === page; 
       //return topicPage.page.includes(page);
      });
      console.info("In pageData, pageInfo is: ", pageInfo);
      if (pageInfo.pageXPs===[] ){
        console.log("No XP list set for this page");
        console.info("^^^^^^^^^^^^^ End preparePageInfo ^^^^^^^^^^^^^^^^");
    }
    else console.log("pageInfo.pageXPs: ", pageInfo.pageXPs);
    console.info("^^^^^^^^^^^^^ End preparePageInfo ^^^^^^^^^^^^^^^^");
      return pageInfo;
      console.info("^^^^^^^^^^^^^ End preparePageInfo ^^^^^^^^^^^^^^^^");
}



export function preparePageDetails(pageInfo, XPs) {
    console.log("Preparing XP's for page", pageInfo.page);
    console.log("pageInfo.length", pageInfo.pageXPs.length);
    if (Array.isArray(pageInfo.pageXPs) && pageInfo.pageXPs.length) {
        console.log("In prepare, we have explicit pageInfo.pageXPs: ", pageInfo.pageXPs);
        const pageXPDetails = [];
        for (let item in pageInfo.pageXPs) {
          console.log("pageXP: ", pageInfo.pageXPs[item]);
          let newXP = XPs.filter(XP => {
           //console.info("In page filter, XP.XPid: ", XP.xpId );
          return XP.xpId === pageInfo.pageXPs[item];
           });
              console.info("newXP: ", newXP[0]);
              pageXPDetails.push(newXP[0]);
              console.info("pageXPDetails length: ", pageXPDetails.length);         
       }
       console.info("^^^^^^^^^^^^^ End pageXPDetails ^^^^^^^^^^^^^^^^");
     return pageXPDetails;
    }
    else { console.log("No XP list set for this page");
    const pageXPDetails = XPs.filter(XP => {
        //console.info("In page filter, ", XP );
        return XP.Page === pageInfo.page;
       });
    
       console.info("In pageData.js, pageXPDetails is: ", pageXPDetails);
       console.info("^^^^^^^^^^^^^ End pageXPDetails ^^^^^^^^^^^^^^^^");
       return pageXPDetails;
    } 
}