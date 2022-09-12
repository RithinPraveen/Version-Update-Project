interface appUpDate {
    appName: string,
    appVersion:IVersion[],
    bugs: IBugs[],
    typeOfUpdates: string[]
}
interface IVersion {
        appVersionName: string,
        relaseDate: string,
        bugId: string,
        features: string,
        author: string,
        typeOfUpdate: string
        }

interface IBugs{
        Id: string,
        Description: string
}

enum typeOfUpdates {
MAJOR,
ENHANCEMENT,
PATCH
}


const update : appUpDate = {
    appName: "YouTube",
    appVersion : [ 
        {
            appVersionName: "V1",
            relaseDate: "20-08-2021",
            bugId: "#100",
            features: "Text correction",
            author: "RITHIN",
            typeOfUpdate: "PATCH"
        }, {
            appVersionName: "V2",
            relaseDate: "26-08-2021",
            bugId: "#103",
            features: "Speak to text ",
            author: "Shiva",
            typeOfUpdate: "MAJOR"
        }, {
            appVersionName: "V3",
            relaseDate: "30-08-2021",
            bugId: "#240",
            features: "Black screen fixed",
            author: "RITHIN",
            typeOfUpdate: "MAJOR"
        }, {
            appVersionName: "V4",
            relaseDate: "02-09-2022",
            bugId: "#201",
            features: "touch respons fixed",
            author: "Melvin",
            typeOfUpdate: "PATCH"
        }, {
            appVersionName: "V5",
            relaseDate: "20-10-2022",
            bugId: "#305",
            features: "notch fix",
            author: "RITHIN",
            typeOfUpdate: "ENHANCEMENT"
        }
    ],
    bugs: [
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
    typeOfUpdates :  ["MAJOR", "PATCH", "ENHANCEMENT"]
}

//--------------------------------------------------------------------------------------------------------

//How many releases were made in a year ?----------------------------------------

const enterYear: string = "2021"

function filterYear(arr:any[], searchKey:string) {
    return arr.filter(function (obj) {
        return Object.keys(obj).some(function (key) {
            return obj[key].includes(searchKey);
        })
    });
}
const totalNumberOfupdate = filterYear(update.appVersion, enterYear).length
console.log("1) How many releases were made in a year ?");
console.log(`   Total releases made in a year : ${totalNumberOfupdate}`);
console.log("--------------------------------------------------");

//In which release specific bugId is present?------------------------------------------------------------

const enterBugId : string = "#240"

function filterbug(arr:any[], searchKey:string) {
    return arr.filter(obj => obj.bugId == searchKey);
}
filterbug(update.appVersion, enterBugId).forEach(i => {
    console.log("2) In which release specific bugId is present?");
    console.log(`   BudId ${enterBugId} is present the release ${i.appVersionName}`);
    console.log("--------------------------------------------------");
})

//which author has worked in many releases ?-------------------------------------------------------------

function findAuthors(arr:any[], key:string) {
    const authors:any[] = [];
    arr.forEach((x) => {
    
        if (authors.some((val) => { return val[key] == x[key] })) {
            authors.forEach((k) => {
                if (k[key] === x[key]) {
                    k["releases"]++
                }
            })
        } else {
            const a :any = {}
            a[key] = x[key]
            a["releases"] = 1
            authors.push(a);
        }
    })
    console.log("3) which author has worked in many releases ?");
    for (const j of authors) {
        console.log(`The most released author is ${j.author} and has worked on ${j.releases} releases.`);
        console.log("--------------------------------------------------");
        break
    }
    return authors
} findAuthors(update.appVersion, "author")

//How many releases were typeOfUpdate of major?-------------------------------------------------------------------

function filterTypeOfUpdate(arr:any[], searchKey:string) {
    return arr.filter(obj => obj.typeOfUpdate == searchKey);
}
const totalTypeOfUpdate = filterTypeOfUpdate(update.appVersion, "MAJOR").length
console.log("4) How many releases were typeOfUpdate of major?");
console.log(`   Total releases made in typeOfUpdate of Major are : ${totalTypeOfUpdate}`);
console.log("--------------------------------------------------");

//How many appVersions have the specific feature name?-------------------------------------------------------

const enterFeature : string = "notch fix"

function filterFeature(arr:any[], searchKey:string) {
    return arr.filter(function (obj) {
        return Object.keys(obj).some(function (key) {
            return obj[key].includes(searchKey);
        })
    });
}
filterFeature(update.appVersion, enterFeature).forEach(i => {
    console.log("5) How many appVersions have the specific feature name?");
    console.log(` The feature "${enterFeature}" is present the releases : ${i.appVersionName}`);
    console.log("--------------------------------------------------");
})
//--------------------------------------------------------------------------------------------------------