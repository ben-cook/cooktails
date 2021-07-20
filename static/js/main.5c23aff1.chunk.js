(this.webpackJsonpcooktails=this.webpackJsonpcooktails||[]).push([[0],{125:function(e,n,a){},146:function(e,n,a){"use strict";a.r(n);a(125),a(126);var i,r,t,c,o,s,l=a(208),d=a(0),u=a.n(d),m=a(16),h=a.n(m),j=a(39),g=a(210),b=a(213),p=new g.a({uri:"https://cooktails-graphql.herokuapp.com/",cache:new b.a}),O=a(207),x=a(18),y=a(215),f=a(198),v=a(199),C=a(200),k=a(201),B=a(190),S=a(103),N=a.n(S),D=a(27),I=a(211),T=Object(I.a)(i||(i=Object(D.a)(["\n  query SearchDrinkByName($findDrinkByNameName: String) {\n    findDrinkByName(name: $findDrinkByNameName) {\n      name\n      ingredients {\n        name\n      }\n      strDrinkThumb\n      instructions\n      measures\n      strVideo\n    }\n  }\n"]))),w=a(104),W=a.n(w),A=a(2),M=Object(B.a)({root:{paddingTop:"15vh",margin:"auto",maxHeight:100,maxWidth:100}}),P=function(){var e=M();return Object(A.jsx)(W.a,{type:"spinningBubbles",color:"black",height:"10vh",width:"20vw",className:e.root})},L=a(192),R=a(151),G=a(193),F=a(194),z=a(195),q=a(196),V=a(197),J=Object(B.a)({table:{},row:{"&:hover":{cursor:"pointer"}}}),H=function(e){var n=e.drink,a=J(),i=Object(x.f)(),r=n.ingredients.map((function(e,a){return{ingredient:e,measure:a<n.measures.length?n.measures[a]:""}}));return Object(A.jsx)(L.a,{component:R.a,children:Object(A.jsxs)(G.a,{className:a.table,"aria-label":"simple table",children:[Object(A.jsx)(F.a,{children:Object(A.jsxs)(z.a,{children:[Object(A.jsx)(q.a,{children:"Ingredient"}),Object(A.jsx)(q.a,{children:"Measure"})]})}),Object(A.jsx)(V.a,{children:r.map((function(e){return Object(A.jsxs)(z.a,{onClick:function(){return n="/ingredient/".concat(e.ingredient.name,"/"),void i.push(n);var n},className:a.row,children:[Object(A.jsx)(q.a,{children:e.ingredient.name}),Object(A.jsx)(q.a,{children:e.measure})]},e.ingredient.name)}))})]})})},$=Object(B.a)({root:{height:"100%",marginTop:"5vh"},image:{height:"75vh"},ingredients:{marginTop:"2em"},video:{margin:"auto",marginTop:"2em"}}),E=function(e){var n,a,i,r,t,c=e.name,o=$(),s=Object(y.a)(T,{variables:{findDrinkByNameName:c}}),l=s.loading,d=s.data;return l?Object(A.jsx)(P,{}):Object(A.jsxs)(f.a,{className:o.root,variant:"outlined",children:[(null===d||void 0===d||null===(n=d.findDrinkByName)||void 0===n?void 0:n.strDrinkThumb)&&Object(A.jsx)(v.a,{image:d.findDrinkByName.strDrinkThumb,className:o.image}),Object(A.jsxs)(C.a,{children:[Object(A.jsx)(k.a,{variant:"h2",children:null===d||void 0===d||null===(a=d.findDrinkByName)||void 0===a?void 0:a.name}),Object(A.jsx)(k.a,{variant:"h4",children:"Recipe"}),Object(A.jsx)(k.a,{variant:"h6",children:null===d||void 0===d||null===(i=d.findDrinkByName)||void 0===i?void 0:i.instructions}),d&&Object(A.jsx)("div",{className:o.ingredients,children:Object(A.jsx)(H,{drink:d.findDrinkByName})}),(null===d||void 0===d||null===(r=d.findDrinkByName)||void 0===r?void 0:r.strVideo)&&Object(A.jsx)(N.a,{url:null===d||void 0===d||null===(t=d.findDrinkByName)||void 0===t?void 0:t.strVideo,className:o.video,width:"80%"})]})]})},K=Object(I.a)(r||(r=Object(D.a)(["\n  query SearchIngredientByName($findIngredientByNameName: String) {\n    findIngredientByName(name: $findIngredientByNameName) {\n      name\n      description\n      type\n      alcoholic\n      ABV\n    }\n  }\n"]))),Y=function(e){return e.split(" ").map((function(e){return function(e){return e&&e[0].toUpperCase()+e.slice(1)||""}(e)})).join(" ")},Q=function(e){return"https://www.thecocktaildb.com/images/ingredients/".concat(e.replaceAll(" ","%20"),".png")},U=Object(B.a)({root:{height:"100%",marginTop:"5vh"},image:{height:"75vh"},ingredients:{marginTop:"1vh"},alcoholicTag:{marginLeft:"1rem"}}),Z=function(e){var n=e.name,a=U(),i=Object(y.a)(K,{variables:{findIngredientByNameName:n}}),r=i.loading,t=i.data;return r?Object(A.jsx)(P,{}):Object(A.jsxs)(f.a,{className:a.root,variant:"outlined",children:[(null===t||void 0===t?void 0:t.findIngredientByName)&&Object(A.jsx)(v.a,{image:Q(null===t||void 0===t?void 0:t.findIngredientByName.name),className:a.image}),Object(A.jsxs)(C.a,{children:[Object(A.jsx)(k.a,{variant:"h2",display:"inline",children:null===t||void 0===t?void 0:t.findIngredientByName.name}),Object(A.jsxs)(k.a,{variant:"subtitle1",display:"inline",className:a.alcoholicTag,children:[(null===t||void 0===t?void 0:t.findIngredientByName.alcoholic)&&"alcoholic".concat((null===t||void 0===t?void 0:t.findIngredientByName.ABV)?" - ".concat(null===t||void 0===t?void 0:t.findIngredientByName.ABV,"% ABV"):""),void 0!==(null===t||void 0===t?void 0:t.findIngredientByName.alcoholic)&&!(null===t||void 0===t?void 0:t.findIngredientByName.alcoholic)&&"non-alcoholic"]}),Object(A.jsx)(k.a,{variant:"body1",children:null===t||void 0===t?void 0:t.findIngredientByName.description})]})]})},X=a(46),_=a(90),ee=a(45),ne=a(204),ae=a(209),ie=a(65),re=a.n(ie),te=a(76),ce=a.n(te),oe=a(214),se=Object(I.a)(t||(t=Object(D.a)(["\n  query NextIngredientToBuyQuery(\n    $drinksThatCanBeMadeWithIngredientsIngredientNames: [String]\n    $ingredientsToBuyIngredientNames: [String]\n  ) {\n    ingredientsToBuy(ingredientNames: $ingredientsToBuyIngredientNames) {\n      ingredient {\n        name\n      }\n      drinksThatCouldBeMade {\n        name\n        strDrinkThumb\n      }\n    }\n\n    drinksThatCanBeMadeWithIngredients(\n      ingredientNames: $drinksThatCanBeMadeWithIngredientsIngredientNames\n    ) {\n      name\n      strDrinkThumb\n    }\n\n    #ingredients {\n    #  name\n    #}\n  }\n"]))),le=["151 proof rum","7-up","Absinthe","Absolut Kurant","Absolut Peppar","Absolut Vodka","Absolut citron","Advocaat","Aejo Rum","Aftershock","Agave Syrup","Ale","Allspice","Allspice Dram","Almond","Almond Flavoring","Amaretto","Amaro Montenegro","Angelica Root","Angostura Bitters","Anis","Anise","Anisette","Aperol","Apfelkorn","Apple","Apple Brandy","Apple Cider","Apple Juice","Apple Schnapps","Applejack","Apricot","Apricot Brandy","Apricot Nectar","Aquavit","Arrack","Asafoetida","Averna","Bacardi","Bacardi Limon","Baileys Irish Cream","Banana","Banana Liqueur","Banana Rum","Banana Syrup","Barenjager","Basil","Beef Stock","Beer","Benedictine","Berries","Bitter lemon","Bitters","Black Pepper","Black Rum","Black Sambuca","Blackberries","Blackberry Brandy","Blackberry Schnapps","Blackcurrant Cordial","Blackcurrant Schnapps","Blackcurrant Squash","Blackstrap rum","Blended Scotch","Blended Whiskey","Blood Orange","Blue Curacao","Blue Maui","Blueberries","Blueberry Schnapps","Bourbon","Brandy","Brown Sugar","Butter","Butterscotch Schnapps","Cachaca","Calvados","Campari","Canadian Whisky","Candy","Cantaloupe","Caramel Coloring","Caramel Sauce","Carbonated Soft Drink","Carbonated Water","Cardamom","Cayenne Pepper","Celery","Celery Salt","Chambord Raspberry Liqueur","Champagne","Chareau","Cherries","Cherry","Cherry Brandy","Cherry Cola","Cherry Grenadine","Cherry Heering","Cherry Juice","Cherry Liqueur","Chocolate","Chocolate Ice-cream","Chocolate Liqueur","Chocolate Milk","Chocolate Sauce","Chocolate Syrup","Cider","Cinnamon","Cinnamon Schnapps","Cinnamon Whisky","Citrus Vodka","Clamato Juice","Cloves","Club Soda","Coca-Cola","Cocchi Americano","Cocktail Onion","Cocoa Powder","Coconut Cream","Coconut Liqueur","Coconut Milk","Coconut Rum","Coconut Syrup","Coffee","Coffee Brandy","Coffee Liqueur","Cognac","Cointreau","Cola","Cold Water","Condensed Milk","Coriander","Corn Syrup","Cornstarch","Corona","Cranberries","Cranberry Juice","Cranberry Liqueur","Cranberry Vodka","Cream","Cream Sherry","Cream Soda","Cream of Coconut","Creme De Almond","Creme De Banane","Creme De Cacao","Creme De Cassis","Creme De Noyaux","Creme Fraiche","Creme de Mure","Creme de Violette","Crown Royal","Crystal Light","Cucumber","Cumin Powder","Cumin Seed","Curacao","Cynar","Daiquiri Mix","Dark Chocolate","Dark Creme De Cacao","Dark Rum","Dark Soy Sauce","Demerara Sugar","Diet Coke","Dr. Pepper","Drambuie","Dried Oregano","Dry Curacao","Dry Vermouth","Dubonnet Blanc","Dubonnet Rouge","Egg","Egg White","Egg Yolk","Eggnog","Elderflower cordial","Erin Cream","Espresso","Everclear","Falernum","Fanta","Fennel Seeds","Fernet-Branca","Figs","Firewater","Flaked Almonds","Food Coloring","Forbidden Fruit","Frangelico","Fresca","Fresh Basil","Fresh Lemon Juice","Fresh Lime Juice","Fresh Mint","Fruit","Fruit Juice","Fruit Punch","Galliano","Garlic Sauce","Gatorade","Gin","Ginger","Ginger Ale","Ginger Beer","Ginger Syrup","Glycerine","Godiva Liqueur","Gold Tequila","Gold rum","Goldschlager","Grain Alcohol","Grand Marnier","Granulated Sugar","Grape juice","Grape soda","Grapefruit Juice","Grapes","Green Chartreuse","Green Creme de Menthe","Green Ginger Wine","Green Olives","Grenadine","Ground Ginger","Guava juice","Guinness","Guinness stout","Habanero Peppers","Half-and-half","Hawaiian punch","Hazelnut liqueur","Heavy cream","Honey","Honey syrup","Hooch","Hot Chocolate","Hot Damn","Hot Sauce","Hpnotiq","Ice","Ice-Cream","Iced tea","Ilegal Joven mezcal","Irish Whiskey","Irish cream","Islay single malt Scotch","Jack Daniels","Jagermeister","Jello","Jelly","Jim Beam","Johnnie Walker","Kahlua","Key Largo Schnapps","Kirschwasser","Kiwi","Kiwi liqueur","Kool-Aid","Kummel","Lager","Lavender","Lemon","Lemon Juice","Lemon Peel","Lemon soda","Lemon vodka","Lemon-Lime","Lemon-lime soda","Lemonade","Licorice Root","Light Cream","Light Rum","Lillet","Lillet Blanc","Lime","Lime Juice","Lime Peel","Lime juice cordial","Lime liqueur","Lime vodka","Limeade","Madeira","Malibu Rum","Mandarin","Mandarine napoleon","Mango","Maple syrup","Maraschino Cherry","Maraschino Liqueur","Maraschino cherry juice","Margarita mix","Marjoram leaves","Marshmallows","Martini Bianco","Martini Extra Dry","Martini Rosso","Maui","Melon Liqueur","Melon Vodka","Mezcal","Midori","Midori Melon Liqueur","Milk","Mini-snickers bars","Mint","Mint syrup","Mountain Dew","Nocino","Nutmeg","Olive","Olive Brine","Olive Oil","Onion","Orange","Orange Bitters","Orange Curacao","Orange Juice","Orange Peel","Orange Slice","Orange Soda","Orange liqueur","Orange rum","Orange spiral","Orange vodka","Oreo cookie","Orgeat Syrup","Ouzo","Oyster Sauce","Papaya","Papaya juice","Parfait amour","Passion fruit juice","Passion fruit syrup","Passoa","Peach","Peach Bitters","Peach Nectar","Peach Schnapps","Peach Vodka","Peach brandy","Peach juice","Peach liqueur","Peachtree schnapps","Peanut Oil","Pepper","Peppermint Schnapps","Peppermint extract","Pepsi Cola","Pernod","Peychaud bitters","Pina colada mix","Pineapple","Pineapple Juice","Pineapple Syrup","Pineapple rum","Pineapple vodka","Pineapple-orange-banana juice","Pink lemonade","Pisang Ambon","Pisco","Plain Chocolate","Plain Flour","Plums","Pomegranate juice","Port","Powdered Sugar","Prosecco","Purple passion","Raisins","Ramazzotti","Raspberry Jam","Raspberry Juice","Raspberry Liqueur","Raspberry Vodka","Raspberry cordial","Raspberry schnapps","Raspberry syrup","Red Bull","Red Chile Flakes","Red Chili Flakes","Red Hot Chili Flakes","Red Wine","Rhubarb","Ricard","Rock Salt","Root beer","Root beer schnapps","Rose","Rosemary","Rosemary Syrup","Roses sweetened lime juice","Rosewater","Rosso Vermouth","Ruby Port","Rum","Rumple Minze","Rye Whiskey","Sake","Salt","Salted Chocolate","Sambuca","Sarsaparilla","Schnapps","Schweppes Lemon","Schweppes Russchian","Scotch","Sherbet","Sherry","Singani","Sirup of roses","Sloe Gin","Soda Water","Sour Apple Pucker","Sour Mix","Southern Comfort","Soy Milk","Soy Sauce","Soya Milk","Soya Sauce","Spiced Rum","Sprite","Squeezed Orange","Squirt","St. Germain","Strawberries","Strawberry Schnapps","Strawberry juice","Strawberry liqueur","Strawberry syrup","Sugar","Sugar Syrup","Sunny delight","Surge","Swedish punsch","Sweet Cream","Sweet Vermouth","Sweet and Sour","Tabasco Sauce","Tang","Tawny port","Tea","Tennessee whiskey","Tequila","Tequila rose","Thyme","Tia Maria","Tomato","Tomato Juice","Tonic Water","Triple Sec","Tropicana","Tuaca","Vanilla","Vanilla Ice-Cream","Vanilla extract","Vanilla liqueur","Vanilla schnapps","Vanilla syrup","Vanilla vodka","Vermouth","Vinegar","Vodka","Water","Watermelon","Watermelon schnapps","Whipped Cream","Whipping Cream","Whiskey","Whisky","White Creme de Menthe","White Rum","White Vermouth","White Vinegar","White Wine","White chocolate liqueur","White grape juice","White port","Wild Turkey","Wildberry schnapps","Wine","Worcestershire Sauce","Wormwood","Yeast","Yellow Chartreuse","Yoghurt","Yukon Jack","Zima"],de=Object(B.a)({root:{height:"100%"},image:{height:"20vh"},icon:{"&:hover":{cursor:"pointer"}},text:{}}),ue=function(e){var n=e.name,a=e.strDrinkThumb,i=de();return Object(A.jsxs)(f.a,{className:i.root,variant:"outlined",children:[Object(A.jsx)(v.a,{image:a,className:i.image}),Object(A.jsx)(C.a,{children:Object(A.jsx)(k.a,{variant:"h6",className:i.text,children:n})})]})},me=a(202),he=a(110),je=a.n(he),ge=Object(B.a)({root:{height:"100%"},image:{height:"20vh"},icon:{"&:hover":{cursor:"pointer"}},text:{}}),be=function(e){var n=e.name,a=e.removeItem,i=ge();return Object(A.jsxs)(f.a,{className:i.root,variant:"outlined",children:[a&&Object(A.jsx)(me.a,{children:Object(A.jsx)(je.a,{className:i.icon,onClick:function(){return a(n)}})}),Object(A.jsx)(v.a,{image:Q(n),className:i.image}),Object(A.jsx)(C.a,{children:Object(A.jsx)(k.a,{variant:"h6",className:i.text,children:n})})]})},pe=a(203),Oe=a(111),xe=a.n(Oe),ye=Object(B.a)({root:{height:"100%"},image:{height:"20vh"},icon:{"&:hover":{cursor:"pointer"}},text:{},ingredientImage:{height:200,width:150},cardOutline:{marginLeft:"1vw",marginTop:"1vw",marginBottom:"1vw",marginRight:"1vw"}}),fe=function(e){var n=e.ingredient,a=e.drinksThatCouldBeMade,i=ye(),r=Object(pe.a)("(min-width:540px)");return Object(A.jsx)(R.a,{className:i.root,variant:"outlined",children:Object(A.jsxs)(ne.a,{container:!0,justifyContent:"center",alignItems:"stretch",children:[Object(A.jsx)(ne.a,{item:!0,xs:!0,className:i.cardOutline,children:Object(A.jsxs)(f.a,{variant:"outlined",style:{height:"100%"},children:[Object(A.jsx)(v.a,{image:Q(n.name),className:i.image}),Object(A.jsx)(C.a,{children:Object(A.jsx)(k.a,{variant:"h6",className:i.text,children:n.name})})]})}),Object(A.jsx)(ne.a,{item:!0,children:Object(A.jsx)(ne.a,{container:!0,direction:"column",alignContent:"center",justifyContent:"center",style:{height:"100%",minWidth:"1em"},children:Object(A.jsx)(xe.a,{})})}),r&&a.map((function(e,n){return Object(A.jsxs)(u.a.Fragment,{children:[n>0&&Object(A.jsx)(ne.a,{item:!0,children:Object(A.jsx)(ne.a,{container:!0,direction:"column",alignContent:"center",justifyContent:"center",style:{height:"100%",minWidth:"1em"},children:Object(A.jsx)(re.a,{})})}),Object(A.jsx)(ne.a,{item:!0,xs:!0,className:i.cardOutline,children:Object(A.jsxs)(f.a,{variant:"outlined",style:{height:"100%"},children:[Object(A.jsx)(v.a,{image:e.strDrinkThumb,className:i.image}),Object(A.jsx)(C.a,{children:Object(A.jsx)(k.a,{variant:"h6",className:i.text,children:e.name})})]})})]},e.name)})),!r&&Object(A.jsx)(ne.a,{container:!0,item:!0,xs:!0,direction:"column",justifyContent:"center",alignContent:"center",alignItems:"center",children:a.map((function(e,n){return Object(A.jsxs)(u.a.Fragment,{children:[n>0&&Object(A.jsx)(ne.a,{item:!0,style:{width:"100%"},children:Object(A.jsx)(ne.a,{container:!0,direction:"column",alignContent:"center",justifyContent:"center",style:{height:"100%",minWidth:"1em"},children:Object(A.jsx)(re.a,{})})}),Object(A.jsx)(ne.a,{item:!0,style:{width:"100%"},children:Object(A.jsxs)(f.a,{className:i.cardOutline,variant:"outlined",children:[Object(A.jsx)(v.a,{image:e.strDrinkThumb,className:i.image}),Object(A.jsx)(C.a,{children:Object(A.jsx)(k.a,{variant:"h6",className:i.text,children:e.name})})]})})]},e.name)}))})]})})},ve=Object(B.a)({ingredientsAutocomplete:{marginTop:"2vh"},nextButton:{marginTop:"2vh",marginBottom:"2vh",textTransform:"capitalize",margin:"auto"},addIcons:{marginRight:"0.5em",height:"0.8em",width:"0.8em"},backButton:{margin:"auto",marginTop:"1vh","&:hover":{cursor:"pointer"}},gridContainer:{flexGrow:1,width:"100%"},cardContainer:{marginTop:"1vh"},heading:{marginBottom:"1vh",marginTop:"1vh"}}),Ce=function(){var e=ve(),n=Object(x.f)(),a=Object(d.useState)([]),i=Object(ee.a)(a,2),r=i[0],t=i[1],c=function(e){var n=[];r.forEach((function(a){a!==e&&n.push(a)})),t(n)},o=Object(y.a)(se,{variables:{ingredientsToBuyIngredientNames:r,drinksThatCanBeMadeWithIngredientsIngredientNames:r}}).data;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(ne.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,className:e.gridContainer,children:[Object(A.jsx)(ne.a,{item:!0,container:!0,xs:2,sm:1,children:Object(A.jsx)(ce.a,{className:e.backButton,onClick:function(){return n.push("/")}})}),Object(A.jsx)(ne.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(A.jsx)(oe.a,{id:"tags-outlined",options:le,getOptionLabel:function(e){return Y(e)},filterSelectedOptions:!0,className:e.ingredientsAutocomplete,renderInput:function(e){return Object(A.jsx)(ae.a,Object(X.a)(Object(X.a)({},e),{},{variant:"outlined",label:"Add ingredients you have!"}))},renderOption:function(n){return Object(A.jsxs)(d.Fragment,{children:[Object(A.jsx)(re.a,{className:e.addIcons})," ",Y(n)]})},onChange:function(e,n){console.log(n),n&&function(e){var n=Object(_.a)(r);n.includes(e)||(n.push(e),t(n))}(n)},blurOnSelect:!0,clearOnBlur:!0})})]}),Object(A.jsx)(k.a,{variant:"h4",className:e.heading,children:"Ingredients:"}),0===r.length&&Object(A.jsx)(k.a,{variant:"subtitle1",align:"center",children:"Add an ingredient to get started."}),Object(A.jsx)(ne.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"stretch",spacing:2,className:e.cardContainer,children:r.map((function(e){return Object(A.jsx)(ne.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(A.jsx)(be,{name:e,removeItem:c})},e)}))}),Object(A.jsx)(k.a,{variant:"h4",className:e.heading,children:"Drinks:"}),0===(null===o||void 0===o?void 0:o.drinksThatCanBeMadeWithIngredients.length)&&Object(A.jsx)(k.a,{variant:"subtitle1",align:"center",children:"Add more ingredients to see drinks that you can make."}),Object(A.jsx)(ne.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"stretch",spacing:2,className:e.cardContainer,children:null===o||void 0===o?void 0:o.drinksThatCanBeMadeWithIngredients.map((function(e){return Object(A.jsx)(ne.a,{item:!0,xs:6,sm:4,md:3,lg:2,children:Object(A.jsx)(ue,Object(X.a)({},e))},e.name)}))}),(null===o||void 0===o?void 0:o.ingredientsToBuy)&&(null===o||void 0===o?void 0:o.ingredientsToBuy.length)>0&&Object(A.jsx)(k.a,{variant:"h4",className:e.heading,children:"Suggestions:"}),Object(A.jsx)(ne.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"stretch",spacing:2,className:e.cardContainer,children:(null===o||void 0===o?void 0:o.ingredientsToBuy)&&Object(_.a)(null===o||void 0===o?void 0:o.ingredientsToBuy).sort((function(e,n){return n.drinksThatCouldBeMade.length-e.drinksThatCouldBeMade.length})).slice(0,8).map((function(e,n){return Object(A.jsx)(ne.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(A.jsx)(fe,Object(X.a)({},e))},e.ingredient.name)}))})]})},ke=a(212),Be=Object(I.a)(c||(c=Object(D.a)(["\n  query RandomDrink {\n    randomDrink {\n      name\n    }\n  }\n"]))),Se=a(206),Ne=function(e){var n=e.randomDrinkHandler,a=e.className,i=e.buttonText,r=e.fullWidth;return Object(A.jsx)(Se.a,{variant:"outlined",color:"default",className:a,fullWidth:r,children:Object(A.jsx)(k.a,{variant:"body1",onClick:function(){return n()},children:i})})},De=Object(B.a)({randomDrinkButton:{marginTop:"2vh",marginBottom:"0.6vh",textTransform:"capitalize",margin:"auto"},buttonContainer:{flexGrow:1,width:"100%",marginTop:"2vh"},backButton:{margin:"auto",marginTop:"1vh","&:hover":{cursor:"pointer"}}}),Ie=function(){var e=De(),n=Object(x.f)(),a=Object(y.a)(Be),i=a.loading,r=a.data,t=a.refetch;return i?Object(A.jsx)(P,{}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(ne.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:2,className:e.buttonContainer,children:[Object(A.jsx)(ne.a,{item:!0,container:!0,xs:2,sm:1,children:Object(A.jsx)(ce.a,{className:e.backButton,onClick:function(){return n.push("/")}})}),Object(A.jsx)(ne.a,{item:!0,container:!0,xs:4,sm:3,children:Object(A.jsx)(Ne,{randomDrinkHandler:t,className:e.randomDrinkButton,buttonText:"See another random cocktail!",fullWidth:!0})})]}),(null===r||void 0===r?void 0:r.randomDrink.name)&&Object(A.jsx)(E,{name:null===r||void 0===r?void 0:r.randomDrink.name}),Object(A.jsx)(ke.a,{textAlign:"center"})]})},Te=Object(I.a)(o||(o=Object(D.a)(["\n  query findDrinksWithIngredients(\n    $findDrinksWithIngredientsIngredientNames: [String]\n    $findDrinksWithIngredientsLimit: Int\n    $findDrinksWithIngredientsOffset: Int\n  ) {\n    findDrinksWithIngredients(\n      ingredientNames: $findDrinksWithIngredientsIngredientNames\n      limit: $findDrinksWithIngredientsLimit\n      offset: $findDrinksWithIngredientsOffset\n    ) {\n      name\n      ingredients {\n        name\n      }\n      strDrinkThumb\n    }\n  }\n"]))),we=Object(I.a)(s||(s=Object(D.a)(["\n  query FuzzyDrinkSearch(\n    $fuzzySearchDrinksByNameSearchTerm: String\n    $fuzzySearchDrinksByNameLimit: Int\n    $fuzzySearchDrinksByNameOffset: Int\n  ) {\n    fuzzySearchDrinksByName(\n      searchTerm: $fuzzySearchDrinksByNameSearchTerm\n      limit: $fuzzySearchDrinksByNameLimit\n      offset: $fuzzySearchDrinksByNameOffset\n    ) {\n      name\n      ingredients {\n        name\n      }\n      strDrinkThumb\n    }\n  }\n"]))),We=a(113),Ae=a.n(We),Me=a(114),Pe=a.n(Me),Le=Object(B.a)({searchGridContainer:{flexGrow:1,width:"100%"},searchbar:{marginTop:"2vh",marginBottom:"2vh",width:"100%"},clickableIcons:{margin:"auto","&:hover":{cursor:"pointer"}},ingredientsAutocomplete:{paddingTop:"2vh"},randomDrinkButton:{marginBottom:"2vh",textTransform:"capitalize",margin:"auto"},optionsPaper:{marginBottom:"2vh",justifyContent:"center"}}),Re=function(e){var n=e.onChangeHandler,a=e.onFilterChangeHandler,i=e.largerThan600,r=Le(),t=Object(x.f)(),c=Object(d.useState)(!1),o=Object(ee.a)(c,2),s=o[0],l=o[1];return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(ne.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,className:r.searchGridContainer,children:[Object(A.jsx)(ne.a,{item:!0,xs:!0,zeroMinWidth:!0,children:Object(A.jsx)(ae.a,{className:r.searchbar,label:"Search for a drink",variant:"outlined",onChange:n})}),Object(A.jsx)(ne.a,{item:!0,container:!0,xs:2,sm:1,children:Object(A.jsx)(Ae.a,{className:r.clickableIcons,onClick:function(){l(!s)}})}),Object(A.jsx)(ne.a,{item:!0,container:!0,xs:2,sm:1,children:Object(A.jsx)(Pe.a,{className:r.clickableIcons,onClick:function(){return t.push("/next")}})})]}),s&&Object(A.jsx)(R.a,{className:r.optionsPaper,variant:"outlined",children:Object(A.jsxs)(O.a,{children:[Object(A.jsx)(oe.a,{multiple:!0,id:"tags-outlined",options:le,getOptionLabel:function(e){return Y(e)},filterSelectedOptions:!0,className:r.ingredientsAutocomplete,renderInput:function(e){return Object(A.jsx)(ae.a,Object(X.a)(Object(X.a)({},e),{},{variant:"outlined",label:"Filter by ingredients instead!",placeholder:"+"}))},onChange:a}),Object(A.jsx)(k.a,{variant:"h6",align:"center",children:"or..."}),Object(A.jsx)(ke.a,{textAlign:"center",children:Object(A.jsx)(Ne,{randomDrinkHandler:function(){var e;e="/random",t.push(e)},className:r.randomDrinkButton,buttonText:"Show me a Random Cocktail",fullWidth:!i})})]})})]})},Ge=Object(B.a)({root:{height:"100%"},image:{height:"30vh"}}),Fe=function(e){var n=e.drink,a=Ge();return Object(A.jsxs)(f.a,{className:a.root,variant:"outlined",children:[n.strDrinkThumb&&Object(A.jsx)(v.a,{image:n.strDrinkThumb,className:a.image}),Object(A.jsxs)(C.a,{children:[Object(A.jsx)(k.a,{variant:"h6",children:n.name}),n.ingredients.map((function(e,n){return Object(A.jsx)(k.a,{variant:"body1",children:e.name},n)}))]})]})},ze=Object(B.a)({root:{flexGrow:1}}),qe=function(e){var n=e.drinks,a=ze();return Object(A.jsx)(ne.a,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"stretch",spacing:2,className:a.root,children:n.map((function(e){return Object(A.jsx)(ne.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(A.jsx)(j.b,{to:"/drink/".concat(e.name),style:{color:"inherit",textDecoration:"inherit"},children:Object(A.jsx)(Fe,{drink:e})})},e.name)}))})},Ve=Object(B.a)({resultsGridContainer:{flexGrow:1},resultsGridItem:{},errorMessage:{margin:"auto",marginTop:"1.5em"}}),Je=function(e){var n,a=e.map(Y);return"Couldn't find any drinks with ".concat(0===(n=a).length?"":function e(n){return 1===n.length?n[0]:2===n.length?"".concat(e(n.slice(0,1))," and ").concat(e(n.slice(1))):"".concat(n[0],", ").concat(e(n.slice(1)))}(n.map(Y)),".")},He=function(){var e=Ve(),n=Object(d.useState)(""),a=Object(ee.a)(n,2),i=a[0],r=a[1],t=Object(d.useState)([]),c=Object(ee.a)(t,2),o=c[0],s=c[1],l=Object(d.useState)("search"),u=Object(ee.a)(l,2),m=u[0],h=u[1],j=Object(pe.a)("(min-width:600px)"),g=Object(y.a)(we,{variables:{fuzzySearchDrinksByNameSearchTerm:i,fuzzySearchDrinksByNameOffset:0,fuzzySearchDrinksByNameLimit:8}}).data,b=Object(y.a)(Te,{variables:{findDrinksWithIngredientsIngredientNames:o,findDrinksWithIngredientsOffset:0,findDrinksWithIngredientsLimit:8}}).data,p=Object(d.useRef)(g);return g&&(p.current=g),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(Re,{onChangeHandler:function(e){r(e.target.value),h("search"),console.log("change")},onFilterChangeHandler:function(e,n){s(n),h("ingredientFilter"),console.log("filter change")},largerThan600:j}),"search"===m&&p.current&&Object(A.jsx)(qe,{drinks:p.current.fuzzySearchDrinksByName}),"ingredientFilter"===m&&b&&Object(A.jsx)(qe,{drinks:b.findDrinksWithIngredients}),"ingredientFilter"===m&&0===(null===b||void 0===b?void 0:b.findDrinksWithIngredients.length)&&Object(A.jsx)(O.a,{children:Object(A.jsx)(k.a,{variant:"h4",color:"textPrimary",className:e.errorMessage,align:"center",children:Je(o)})})]})},$e=function(){return Object(A.jsxs)(x.c,{children:[Object(A.jsx)(x.a,{exact:!0,path:"/drink/:name",render:function(e){return Object(A.jsx)(E,{name:e.match.params.name})}}),Object(A.jsx)(x.a,{exact:!0,path:"/ingredient/:name",render:function(e){return Object(A.jsx)(Z,{name:e.match.params.name})}}),Object(A.jsx)(x.a,{exact:!0,path:"/random",component:Ie}),Object(A.jsx)(x.a,{exact:!0,path:"/next",component:Ce}),Object(A.jsx)(x.a,{path:"/",component:He})]})};var Ee=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(O.a,{children:Object(A.jsx)($e,{})})})};h.a.render(Object(A.jsx)(u.a.StrictMode,{children:Object(A.jsx)(l.a,{client:p,children:Object(A.jsx)(j.a,{basename:"/",children:Object(A.jsx)(Ee,{})})})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.5c23aff1.chunk.js.map