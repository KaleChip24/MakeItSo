# Project Overview

## Project Name

Old Bricks New Tricks

## Project Description

This website will allow you to enter the ID of a LEGO set and will give back alternative build ideas for that set. 

## API and Data Sample
[Rebrickable API containing example ID #](https://rebrickable.com/api/v3/lego/sets/75936-1/alternates/?key=430949585e7e48d558a057f45e6f437f)

```
  {
            "set_num": "MOC-39906",
            "name": "75936: Chicken (C.rex)",
            "year": 2020,
            "theme_id": 602,
            "num_parts": 1263,
            "moc_img_url": "https://cdn.rebrickable.com/media/mocs/moc-39906.jpg",
            "moc_url": "https://rebrickable.com/mocs/MOC-39906/Tomik/75936-chicken-crex/",
            "designer_name": "Tomik",
            "designer_url": "https://rebrickable.com/users/Tomik/mocs/"
        },
        {
            "set_num": "MOC-46700",
            "name": "T-Rex Fireplace",
            "year": 2020,
            "theme_id": 602,
            "num_parts": 941,
            "moc_img_url": "https://cdn.rebrickable.com/media/mocs/moc-46700.jpg",
            "moc_url": "https://rebrickable.com/mocs/MOC-46700/emil_mu/t-rex-fireplace/",
            "designer_name": "emil_mu",
            "designer_url": "https://rebrickable.com/users/emil_mu/mocs/"
        },
```

## Wireframes

[Mobile and Desktop mockups](https://i.ibb.co/LStv9GB/Old-Bricks-Wireframe.png)

#### MVP 

- API will fetch alternative builds for LEGO set IDs
- Functional submit button
- Displayed info: Image, build name and link to build page


#### PostMVP  

- Drop down option for 'Search by name'
- Submit button stylized to look like LEGO brick
- Create a favoites list
- Use second API to populate instructional PDF of builds

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Nov 05-07| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 08| Project Approval | Complete
|Nov 09| Core Application Structure (HTML, CSS, etc.) | Complete
|Nov 11| Pseudocode / actual code | Complete
|Nov 12| MVP | Complete
|Nov 15| Presentations | Incomplete

## Priority Matrix

[Old Bricks Sticky Note Matrix](https://i.ibb.co/rMy5XtG/Old-Bricks-Priority-Matrix.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3hrs | 3hrs |
| Wireframes | H | 2hrs| 2hrs | 2hrs |
| Priority Matrix | H | 3hrs| 3hrs | 3hrs |
| Timeframes | H | 2hrs| 2hrs | 2hrs |
| Working with API | H | 2hrs| 2hrs | 2hrs |
| Pseudocode | H | 1hrs| .5hrs | .5hrs |
| HTML Structure | H | 2hrs| 2hrs | 2hrs |
| CSS Structure | H | 3hrs| 3hrs | 3hrs |
| JS Structure | H | 3hrs| 3hrs | 3hrs |
| Submit Button Click | H | 2hrs| 1hrs | 1hrs |
| Creating & Appening Elements | H | 2hrs| 2hrs | 2hrs |
| Eventlistener on click | H | 2hrs| 1.5hrs | 1.5hrs |
| Remove Eventlistener | H | 2hrs| 1hrs | 1hrs |
| Brick Build Fetch function| H | 3hrs | 3hrs| 3hrs|
| Flexbox | H | 2hrs| 2hrs | 2hrs |
| Media Query Mobile | H | 3hrs| 2hrs | 2hrs |
| MVP Final Testing/Debugging | H | 3hrs| 2hrs | 2hrs |
| Post-MVP | M | 4hrs| 3hrs | 3hrs |
| Total | H | 44hrs| 38hrs |38hrs |

## Code Snippet

```
button {
  align-self: center;
  background-image: url(YellowBrick.png);
  background-color: rgba(245, 245, 245, 0);
  border-color: rgba(245, 245, 245, 0);
  background-size: cover;
  width: 75px;
  height:75px;
  margin-left: 30px;
}
```

## Change Log
N/A