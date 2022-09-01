interface AppUpdate {
    AppName: string,
    Version: {
        VersionName: string,
        RelaseDate: string,
        bugId: string,
        features: string,
        Author: string,
        Type: string
    }[],
    Bugs: {
        Id: string,
        Description: string
    }[],
    Types: string[]


}

let Update : AppUpdate = {
    AppName: "YouTube",
    Version: [
        {
            VersionName: "V1",
            RelaseDate: "20-08-2021",
            bugId: "#100",
            features: "Text correction",
            Author: "RITHIN",
            Type: "PATCH"
        }, {
            VersionName: "V2",
            RelaseDate: "26-08-2021",
            bugId: "#103",
            features: "Speak to text ",
            Author: "Shiva",
            Type: "MAJOR"
        }, {
            VersionName: "V3",
            RelaseDate: "30-08-2021",
            bugId: "#240",
            features: "Black screen fixed",
            Author: "RITHIN",
            Type: "MAJOR"
        }, {
            VersionName: "V4",
            RelaseDate: "02-09-2022",
            bugId: "#201",
            features: "touch respons fixed",
            Author: "Melvin",
            Type: "PATCH"
        }, {
            VersionName: "V5",
            RelaseDate: "20-10-2022",
            bugId: "#305",
            features: "notch fix",
            Author: "RITHIN",
            Type: "ENHANCEMENT"
        }
    ],
    Bugs: [
        {
            Id: "#100",
            Description: "When the Times fixes today's or yesterday's mistakes, it does update the text to reflect the correction."
        },
        {
            Id: "#103",
            Description: "In YouTube videos posted three weeks before the shooting, Loughner ranted (in on-screen text) about the counting of B.C.E."
        },
        {
            Id: "#240",
            Description: "There is no such thing as “the screen.” A laptop screen is not a TV screen is not a movie screen is not an iPad screen is not a Kindle screen."
        },
        {
            Id: "#201",
            Description: "You press a little touch tone keypad, the sandwich comes, you touch this, touch this, touch this, go pay the cashier, there's your sandwich."
        },
        {
            Id: "#305",
            Description: "rating slips from Aaa one notch to Aa1, its long-term deposit rating would also slip a notch from Aa1 to Aa2."
        }
    ],
    Types: ["MAJOR", "PATCH", "ENHANCEMENT"]
}

//--------------------------------------------------------------------------------------------------------

//How many releases were made in a year ?----------------------------------------

let EnterYear: any = "2021"

function FilterYear(arr:any[], searchKey:any[]) {
    return arr.filter(function (obj) {
        return Object.keys(obj).some(function (key) {
            return obj[key].includes(searchKey);
        })
    });
}
let TotalNumberOfUpdate = FilterYear(Update.Version, EnterYear).length
console.log("1) How many releases were made in a year ?");
console.log(`   Total releases made in a year : ${TotalNumberOfUpdate}`);
console.log("--------------------------------------------------");

//In which release specific bugId is present?------------------------------------------------------------

let EnterbugId : any = "#240"

function Filterbug(arr:any[], searchKey:any[]) {
    return arr.filter(obj => obj.bugId == searchKey);
}
Filterbug(Update.Version, EnterbugId).forEach(i => {
    console.log("2) In which release specific bugId is present?");
    console.log(`   BudId ${EnterbugId} is present the release ${i.VersionName}`);
    console.log("--------------------------------------------------");
})

//which author has worked in many releases ?-------------------------------------------------------------

function FindAuthors(arr:any[], key:string) {
    let Authors:any[] = [];
    arr.forEach((x) => {
    
        if (Authors.some((val) => { return val[key] == x[key] })) {
            Authors.forEach((k) => {
                if (k[key] === x[key]) {
                    k["releases"]++
                }
            })
        } else {
            let a :any = {}
            a[key] = x[key]
            a["releases"] = 1
            Authors.push(a);
        }
    })
    console.log("3) which author has worked in many releases ?");
    for (const j of Authors) {
        console.log(`The most released author is ${j.Author} and has worked on ${j.releases} releases.`);
        console.log("--------------------------------------------------");
        break
    }
    return Authors
} FindAuthors(Update.Version, "Author")

//How many releases were type of major?-------------------------------------------------------------------

function FilterType(arr:any[], searchKey:string) {
    return arr.filter(obj => obj.Type == searchKey);
}
let TotalType = FilterType(Update.Version, "MAJOR").length
console.log("4) How many releases were type of major?");
console.log(`   Total releases made in Type of Major are : ${TotalType}`);
console.log("--------------------------------------------------");

//How many versions have the specific feature name?-------------------------------------------------------

let EnterFeature = "notch fix"

function FilterFeature(arr:any[], searchKey:string) {
    return arr.filter(function (obj) {
        return Object.keys(obj).some(function (key) {
            return obj[key].includes(searchKey);
        })
    });
}
FilterFeature(Update.Version, EnterFeature).forEach(i => {
    console.log("5) How many versions have the specific feature name?");
    console.log(` The feature "${EnterFeature}" is present the releases : ${i.VersionName}`);
    console.log("--------------------------------------------------");
})
//--------------------------------------------------------------------------------------------------------