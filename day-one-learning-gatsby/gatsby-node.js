exports.createPages = async function ({ actions}) {
                  
    actions.createPage({
        path: "fruits",
        component: require.resolve("./src/programmatically-create-page/index.tsx"),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Zia",
         },
    });
    console.log("End of Gatsby Node File");
}