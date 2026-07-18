import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    {
      "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiOvp6MXrCUMD7_9x01HieBQHFLPePd8uRokw53_eEcw3O0nXlHEfB1H6&s=10",
      "companyName": "Google",
      "datePosted": "2 days ago",
      "postTitle": "Senior UX Researcher",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "salary": "95",
      "location": "Mountain View, CA"
    },
    {
      "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhSOhVxQMORW1hbzj3TeuvPiZNfgzz9erq0eyu1_zjw&s=10",
      "companyName": "Apple",
      "datePosted": "5 days ago",
      "postTitle": "Machine Learning Engineer",
      "tag1": "Full-time",
      "tag2": "Mid level",
      "salary": "110",
      "location": "Cupertino, CA"
    },
    {
      "brandLogo": "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
      "companyName": "Meta",
      "datePosted": "1 week ago",
      "postTitle": "Senior UI/UX Designer",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "salary": "105",
      "location": "London, UK"
    },
    {
      "brandLogo": "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      "companyName": "Amazon",
      "datePosted": "4 days ago",
      "postTitle": "Software Development Engineer II",
      "tag1": "Full-time",
      "tag2": "Mid level",
      "salary": "85",
      "location": "Seattle, WA"
    },
    {
      "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVooNbmrQduvFXQhUp5e9GUajxnf-ZuEhnIJ0kRLXW8ZZQwnsCTpAUmg&s=10",
      "companyName": "Microsoft",
      "datePosted": "3 weeks ago",
      "postTitle": "Cloud Solution Architect",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "salary": "115",
      "location": "Hyderabad, India"
    },
    {
      "brandLogo": "https://fellowstudio.com/wp-content/uploads/2023/08/Netflix-Logo-2006-500x333-1.png",
      "companyName": "Netflix",
      "datePosted": "1 day ago",
      "postTitle": "Frontend Engineer",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "salary": "130",
      "location": "Los Gatos, CA"
    },
    {
      "brandLogo": "https://brandeps.com/logo-download/u/uber-logo-02.png",
      "companyName": "Uber",
      "datePosted": "6 days ago",
      "postTitle": "Product Designer",
      "tag1": "Full-time",
      "tag2": "Mid level",
      "salary": "80",
      "location": "Amsterdam, Netherlands"
    },
    {
      "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nliJRWGHCXGsp-Mc-Lzb1gSrCITubH-qnfzBDGHpmg&s=10",
      "companyName": "Airbnb",
      "datePosted": "2 weeks ago",
      "postTitle": "Data Scientist",
      "tag1": "Part-time",
      "tag2": "Senior level",
      "salary": "120",
      "location": "San Francisco, CA"
    },
    {
      "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcu-ssi7B0rjqlAygu-VF2xqvx9YyLuCpa8KREcm92w&s",
      "companyName": "Salesforce",
      "datePosted": "10 days ago",
      "postTitle": "Junior QA Engineer",
      "tag1": "Full-time",
      "tag2": "Junior level",
      "salary": "55",
      "location": "Bengaluru, India"
    },
    {
      "brandLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzGB3h6d42rlYD-aClVg_kswg0bAoWvb39VPVG6tRWrhq-cpR4Jll8L8w&s=10",
      "companyName": "Adobe",
      "datePosted": "4 weeks ago",
      "postTitle": "Technical Program Manager",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "salary": "100",
      "location": "Noida, India"
    }
  ]


  return (
    <div className='main justify-center flex gap-6 flex-wrap bg-neutral-200 p-6 h-screen scrollbar-thin overflow-y-auto'>
      {jobOpenings.map((elem, idx) => {
        return <div key={idx}>
          <Card brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} postTitle={elem.postTitle} tag1={elem.tag1} tag2={elem.tag2} salary={elem.salary} location={elem.location} />
        </div>
      }
      )}
    </div>
  )
}

export default App
