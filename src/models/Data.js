import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import menCateg from '../utils/assets/MenCateg.jpg' ; 
import womenCateg from '../utils/assets/WomenCateg.jpg' ;
import childCateg from '../utils/assets/childCateg.jpg';


const categoryList = [
    {
        title : 'Men' ,
        imgSrc : menCateg , 

    },
    {
        title : 'Women' ,
        imgSrc : womenCateg , 

    },{
        title : 'Children' ,
        imgSrc : childCateg , 

    }

]
const menuItemsNames = ["Men" ,"Women" , "Children" , "Accessories" , "News"]
const menuItems = {
    "Men" : {
        "items": [
            {
                "id" : 1 ,
                "name":"Shoes",
                "value" : ["Sport" , "Classic" , "Special" , "Peak"],
            },
            {
                "id" : 2 ,
                "name":"Clothes",
                "value" : ["Wedding" , "Jean" , "Sport","Compilation"],
            },
            {
                "id" : 3 ,
                "name":"Accessories",
                "value" : ["Watch" , "Phone"] ,
            },
           
            ],
        
    },
    "Women" : {
        "items": [
            {
                "id" : 4 ,
                "name":"Shoes",
                "value" : ["Nike" , "Classic" , "Anta" , "Peak"],
            },
            {
                "id" : 5 ,
                "name":"Clothes",
                "value" : ["Wedding" , "Special" , "Sport","Ladies"],
            },
            {
                "id" : 6 ,
                "name":"Accessories",
                "value" : ["Watch" , "For you"],
            },
        ]
        
    },
    "Children" : {
        "items": [
            {
                "id" : 7 ,
                "name":"Shoes",
                "value" :  ["Nike" , "Classic" , "Anta" , "Peak"],
            },
            {
                "id" : 8 ,
                "name":"Clothes",
                "value" : [ "Special" , "Sport","Ladies"],
            },
          
        ]
      

    },
    "Accessories" : {
        "items": [
            {
                "id" : 9 ,
                "name":"Phone",
                "value" : ["IPhone" , "Sumsung" , "Lenovo" ],
            },
            {
                "id" : 10 ,
                "name":"Watch",
                "value" : [ "Special" , "Sport","Ladies","Men"],
            },
          
        ]
      

    },
    "News" : {
        "items" :[

        ]
      
    },
}

const socialMediaList = [
    {
        "child" :  <FacebookOutlinedIcon sx={{ color: "#ffffff" }} />,
        "link" : "https://www.facebook.com/profile.php?id=61553910414900",
        "color":"#3b5998"    
    },
    {
        "child" :   <InstagramIcon sx={{ color: "#ffffff" }} />,
        "link" : "https://www.instagram.com/dd_shopping_store/",
        "color":"#e1306c"   
    },
    {
        "child" :   <WhatsAppIcon sx={{ color: "#ffffff" }} />,
        "link" : "",
        "color":"#2cd548"  
    },
    {
        "child" :  <TwitterIcon sx={{ color: "#ffffff" }} />,
        "link" : "",
        "color":"#1da1f2"  
    },


]


const valuesItem = [
    {
        icon :"material-symbols-light:support-agent-outline-sharp" ,
        header : 'Quality service' ,
        body : 'Dedicated customer service'
    },
    {
        icon :"carbon:delivery"  ,
        header : 'Home delivery service' ,
        body : 'Home delivery in less than 72 hours'
    },
    {
        icon :"clarity:new-line"  ,
        header : 'New products' ,
        body : 'New products every two weeks'
    },
    {
        icon :"gala:secure" ,
        header : 'Secure payment' ,
        body : 'Secure online payment or cash on delivery'
    },
]

export {valuesItem,menuItems , menuItemsNames,socialMediaList , categoryList}