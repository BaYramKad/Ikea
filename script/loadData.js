const wishList = ["idd012", "idd042", "idd062", "idd023"];
const cardList = [
    {
        id: "idd054",
        count: 3
    },
    {
        id: "idd032",
        count: 2
    },
    {
        id: "idd098",
        count: 3
    }
];

const loadData = () => {
    if (location.search){
        console.log("search");
    }

    if (location.hash){
        console.log("hash");
    }
    if (location.pathname.includes("cart")){
        console.log("pathName");
    }
};

export default loadData;