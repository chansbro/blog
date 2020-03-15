(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{78:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("So far in this series, I've talked about how to get set up on Azure as a web app with hosting on "),a("code",[e._v("azurewebsites.net")]),e._v(" and how to set up continuous integration using Azure pipelines. If you've been following along, you'll know by now how to scaffold a Vue web site and have it solidly hosted on Azure. Check parts 1 and 2 of this series to learn more.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/cocktail1.png",alt:"cocktails!"}})]),e._v(" "),a("p",[e._v("Now we return to the premise of the series, which is the idea that, at some point, you might need to move off of services such as Firebase, with its intuitive real-time database service, and onto a service like Microsoft Azure. But so far, I haven't really talked about the database part of the equation.")]),e._v(" "),a("h2",{attrs:{id:"get-ready-friends-because-it-s-database-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-ready-friends-because-it-s-database-time"}},[e._v("#")]),e._v(" Get ready, friends, because it's DATABASE TIME!")]),e._v(" "),a("p",[e._v("The web site that I have wanted to build makes use of the same dataset that I created for my MixoLogy demo app. Learn more about that project "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=SgBDEydZb4A",target:"_blank",rel:"noopener noreferrer"}},[e._v("in this video"),a("OutboundLink")],1),e._v(". It involved repurposing data from the "),a("a",{attrs:{href:"https://mrbostondrinks.com/about",target:"_blank",rel:"noopener noreferrer"}},[e._v("Old Mr. Boston Bartender's Guide"),a("OutboundLink")],1),e._v("*, a classic book of over 1000 cocktails originally published in 1935 (and now reprinted for your enjoyment after having undergone many revisions).")]),e._v(" "),a("p",[e._v("After a lot of data cleaning, my dataset contains 990 recipes which you can "),a("a",{attrs:{href:"https://www.kaggle.com/jenlooper/analyzing-mr-boston-dataset",target:"_blank",rel:"noopener noreferrer"}},[e._v("peruse on Kaggle"),a("OutboundLink")],1),e._v(", for data science purposes. These recipes also reside in Firebase, and are even now used in my MixoLogy mobile app: click on an image of a bottle and get recipes that use that particular spirit, among other things.")]),e._v(" "),a("p",[e._v("For my new website, built for this series, I wanted to create a web site reflecting something Azure-colored, so I decided to create a listing of the cocktails that would naturally be colored blue, due to the presence of blue curacao liqueur in the recipe. In essence, I need:")]),e._v(" "),a("ul",[a("li",[e._v("to import my dataset into one of Azure's database offerings")]),e._v(" "),a("li",[e._v("to use that dataset in my Azure-Cocktails Vue app")]),e._v(" "),a("li",[e._v("to build a nice UI around the experience")])]),e._v(" "),a("p",[e._v("So, back to "),a("a",{attrs:{href:"https://ms.portal.azure.com?WT.mc_id=jenloopercom-blog-jelooper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Portal"),a("OutboundLink")],1),e._v("! Originally, I had thought I'd need to jump to Cosmos DB, but my database needs are very minimal for this app; just one collection,a simple data structure, and a very basic use case. So Cosmos DB is a little too much for this project.")]),e._v(" "),a("blockquote",[a("p",[e._v("You might want to use "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cosmos-db/use-cases?WT.mc_id=jenloopercom-blog-jelooper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos DB"),a("OutboundLink")],1),e._v(" for databases that require global distribution and that need to scale. For my little app, it wasn't necessary to have such a robust solution.")])]),e._v(" "),a("p",[e._v("Instead, after consulting with my colleagues Simona Cotin and Suz Hinton, I decided to use Azure Tables, a part of Azure Storage, to store my basic cocktail data.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/cocktail2.png",alt:"cocktails!"}})]),e._v(" "),a("h2",{attrs:{id:"step-1-export-your-firebase-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-export-your-firebase-data"}},[e._v("#")]),e._v(" Step 1: Export your Firebase data")]),e._v(" "),a("p",[e._v("The first step for me was to download my data from Firebase and upload it to Azure. Downloading is easy enough; find your database in the Firebase console and export it as JSON to your local.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/firebase.png",alt:"firebase"}})]),e._v(" "),a("p",[e._v("Next, you're going to want to convert this data to a .csv format. Do it using a tool such as this one: "),a("a",{attrs:{href:"json-csv.com"}},[e._v("json to csv")]),e._v(".")]),e._v(" "),a("p",[e._v("To upload this data to Azure Table Storage, first visit the Azure Portal and create a database. Click the "),a("code",[e._v("+")]),e._v(" at the top left to create a resource. It will be a Storage Account, and can be a "),a("code",[e._v("general purpose v1")]),e._v(" storage account for "),a("code",[e._v("Locally-redundant storage (LRS)")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/azure-storage-account.png",alt:"azure storage"}})]),e._v(" "),a("p",[e._v("Once the deployment of this account is complete, you will see several elements of your storage account listed. The one of interest to us is the Table Storage. Here's where you will create a table to store your exported data. Click on the 'Tables' link:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/azure-storage.png",alt:"azure storage"}})]),e._v(" "),a("p",[e._v("At this point, you want to find some way to import the data. But hey, there's no link or any easy way to do it via the web portal! Oh noes!")]),e._v(" "),a("p",[e._v("Thanks to Suz's super secret tip, there's a 'backdoor' to do this: the Azure Storage Explorer desktop tool.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/storage-explorer.png",alt:"azure storage tool"}})]),e._v(" "),a("h2",{attrs:{id:"step-2-upload-your-data-to-azure-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-upload-your-data-to-azure-storage"}},[e._v("#")]),e._v(" Step 2: Upload your data to Azure Storage")]),e._v(" "),a("p",[e._v("Go to the "),a("a",{attrs:{href:"https://azure.microsoft.com/en-us/features/storage-explorer?WT.mc_id=jenloopercom-blog-jelooper/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Storage Explorer web site"),a("OutboundLink")],1),e._v(" and download this free tool. After it's installed, login using your Azure credentials.")]),e._v(" "),a("p",[e._v("Now, when you fire up the tool, you can navigate to your storage account's tables and upload your data from .csv. Use the toolbar at the top of the table to import.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/desktop-explorer.png",alt:"azure storage explorer tool"}})]),e._v(" "),a("blockquote",[a("p",[e._v("Note, Table Storage is picky about column names, and you may need to rename yours in pascal-case or camel-case.")])]),e._v(" "),a("p",[e._v("If all goes well, you should have your data safely in an Azure Table! Now you can start using it in your app.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/cocktail3.png",alt:"cocktails!"}})]),e._v(" "),a("h2",{attrs:{id:"connect-your-app-to-azure-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-your-app-to-azure-tables"}},[e._v("#")]),e._v(" Connect your app to Azure Tables")]),e._v(" "),a("p",[e._v("To connect your Vue app to the Storage service you created in Azure, you need to use the "),a("a",{attrs:{href:"https://github.com/Azure/azure-storage-node?WT.mc_id=jenloopercom-blog-jelooper",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure-Storage"),a("OutboundLink")],1),e._v(" npm package, which is Azure's Storage SDK for Node.js. Install it in your app ("),a("code",[e._v("npm i azure-storage")]),e._v("). You'll need it when you query the database.")]),e._v(" "),a("p",[e._v("As is normal in an app that connects to the cloud, a connection string is needed to make the handshake between a service and an app. Find the right connection string in the Azure portal under the Storage Account's 'Access Keys' section. I added mine to a "),a("code",[e._v("config.js")]),e._v(" file that I placed in the app root:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export default {\n\tDB_KEY:\n\t\t'DefaultEndpointsProtocol=https;AccountName=azurecocktails921b;AccountKey=blablabla==;EndpointSuffix=core.windows.net',\n};\n")])])]),a("p",[e._v("Once the key is in place, you can reference "),a("code",[e._v("DB_KEY")]),e._v(" in the app.")]),e._v(" "),a("h2",{attrs:{id:"query-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-the-data"}},[e._v("#")]),e._v(" Query the data")]),e._v(" "),a("p",[e._v("The moment has arrived to use your data, finally! In this app, I want to show only cocktails that are blue in color because, you know, Azure. I figure, if the recipe has any dosage of blue curaçao, it will be at least a little blue. So I created a Vuex store where all my database functions will reside.")]),e._v(" "),a("p",[e._v("To fetch the list of cocktails, I added a query:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\tfetchCocktails({ commit }) {\n\t\tvar azure = require('azure-storage');\n\t\tvar tableService = azure.createTableService(config.DB_KEY);\n\t\tvar query = new azure.TableQuery()\n\t\t\t.top(100)\n\t\t\t.where('ingredient1 eq ?', 'Blue curacao')\n\t\t\t.or('ingredient2 eq ?', 'Blue curacao')\n\t\t\t.or('ingredient3 eq ?', 'Blue curacao')\n\t\t\t.or('ingredient4 eq ?', 'Blue curacao')\n\t\t\t.or('ingredient5 eq ?', 'Blue curacao')\n\t\t\t.or('ingredient6 eq ?', 'Blue curacao');\n\n\t\ttableService.queryEntities('cocktails', query, null, function(error, result, response) {\n\t\t\tif (!error) {\n\t\t\t\tcommit('setCocktails', response.body.value);\n\t\t\t} else {\n\t\t\t\t//throw error\n\t\t\t\talert('Oh noes! No cocktails found.');\n\t\t\t}\n\t\t});\n\t},\n")])])]),a("p",[e._v("In this query, there are several things going on:")]),e._v(" "),a("ul",[a("li",[e._v("use the azure-storage npm package")]),e._v(" "),a("li",[e._v("create a reference to the storage service from that package, invoking the "),a("code",[e._v("db_key")]),e._v(" in the config file")]),e._v(" "),a("li",[e._v("create a new query with several conditionals")]),e._v(" "),a("li",[e._v("call the query on the service")]),e._v(" "),a("li",[e._v("commit the results to the Vuex store where it can be reused")])]),e._v(" "),a("p",[e._v("Now, you can get the filtered list of cocktails in the "),a("code",[e._v("created()")]),e._v(" lifecycle hook in your Home.vue component, storing the returned data in a computed property for use in creating the recipe cards:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' computed: {\n    ...mapState(["cocktails"])\n},\n\ncreated() {\n    this.$store.dispatch("fetchCocktails");\n}\n')])])]),a("p",[e._v("And ... voila! Now you have data you can view in your app ... or at least you should.")]),e._v(" "),a("h2",{attrs:{id:"fix-cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fix-cors"}},[e._v("#")]),e._v(" Fix CORS")]),e._v(" "),a("p",[e._v("Beware! You might be unpleasantly surprised to see that your data isn't yet showing up! That's because you may have run into a CORS issue. Go back into your Storage account in the portal and ensure that CORS is set properly, giving access to your web site via the appropriate headers. Learn more about "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/rest/api/storageservices/Cross-Origin-Resource-Sharing--CORS--Support-for-the-Azure-Storage-Services?WT.mc_id=jenloopercom-blog-jelooper",target:"_blank",rel:"noopener noreferrer"}},[e._v("CORS in the docs"),a("OutboundLink")],1),e._v(". Once CORS is fixed, you should see your app running locally and also you can post it up to Azure following the instructions in the first two articles in this series.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/azure-cocktails-ws.png",alt:"cocktails!"}})]),e._v(" "),a("h2",{attrs:{id:"cheers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cheers"}},[e._v("#")]),e._v(" Cheers!")]),e._v(" "),a("p",[e._v("If you like blue curaçao, you're in luck! I've built a nice-looking, simple database-driven web site for your summer enjoyment. By the way, I hand drew all the cocktails, based on their descriptions, using Procreate and an Apple Pencil.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/41/lady_cocktail.png",alt:"cheers!"}})]),e._v(" "),a("p",[e._v("In this post, I discussed how to get a very basic database set up to query in your Vue app. In my next post, I'll talk more about how to use it more like a Firebase database, using realtime functionality to enhance the app's UI. Stay tuned!")]),e._v(" "),a("p",[e._v("*The Mr. Boston brand name is now the intellectual property of Sazerac, who retains the rights to the brand but graciously allows for "),a("a",{attrs:{href:"http://www.sazerac.com/SazeracTermsOfUse.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("noncommercial use"),a("OutboundLink")],1),e._v(" of the content.")])])}),[],!1,null,null,null);t.default=r.exports}}]);