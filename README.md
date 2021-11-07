# Project Overview

## Project Name

Old Bricks New Tricks

## Project Description

This website will allow you to enter in the ID of a LEGO set and will give back alternate builds for that set. 

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

- API will fetch alternate builds for lego set #ID 
- Functional submit button
- Displayed info: Image, build name and link to build page


#### PostMVP  

- Drop down option for 'Search by name'
- Submit button stylized to look like lego brick
- Create a favoites list
- Use second API to populate instrustional PDF of builds

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Nov 05-07| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Nov 08| Project Approval | Incomplete
|Nov 09| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Nov 11| Pseudocode / actual code | Incomplete
|Nov 12| MVP | Incomplete
|Nov 15| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  