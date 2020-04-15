### Team Members
You can edit, add, or remove team members.
- [Edit Team Members](#edit)
- [Add Team Members](#add)
- [Remove Team Members](#remove)


#### Edit
You can edit a team member's profile and details the same way you would edit your own. Reference [Editing Your Profile](profile.md) for more details.


#### Add
When a new team member joins your company, make sure to add them to your website. Have them draft a short biography, a quick snapshot of their professional credentials, and obtain a professional photograph. This is what they will need.
1. Biography
2. Credentials
3. Professional Photo

Once they have these elements, you can add them to the website. 
1. Upload their photo to your [Team Folder](../assets/team/). 
2. Add their details to your [Team List](../content/targets/team.js). Copy and paste everything *between and with* the brackets `{...}`. Make sure the `"order: 1"` is unique and where you want them displayed. 
```
export const team = [
		{
			"order": 1,		<-- make sure is a unique #
			"url": "cherish-thompson",
			"name": "Cherish Thompson",
			"title": "Managing Partner",
			"city": "London",
			"phone": "+44 949-292-9953",
			"email": "cthompson@tmct.law",
			"image": "cherish-thompson.jpg"
		},		<-- Do not use a comma when last
```
If they are inserted last in the array *do not use a comma after the bracket*
3. Add a file with their name on it to your [Content Folder](../content/), example `john-smith.md`. Enter their bio and their credentials into the file like this.
```
### Profile
Add their biography here.

**** 								<-- This creates a page break

### Credentials 						

#### Education 							
- List Education

#### Memberships
- List Memberships

... etc			
```
4. Add the file name, `john-smith`, to your [Targets File](../content/targets/targets.js) within the `"people"` array.
```
export const targets = 
{
	"services": [
		"immigration",
...
		"mediation"
	],
	"people": [
		"cherish-thompson",
		"talle-malkemus",
		"new-team-member"		<-- must match file name
	]
}
```


#### Remove
Removing a team member is easier. Follow these 4 steps and you will remove them completely from the website.  
1. Remove their name from your [People List](../content/targets/targets.js). Make sure the last person on the list does not have a `,`.
```
export const targets = 
{
	"services": [
		"immigration",
...
		"mediation"
	],
	"people": [
		"cherish-thompson",
		"talle-malkemus",
		"team-member"		<-- Remove team member
	]
}
```
2. Remove ther details from your [Team Lis](../content/targets/team.js). This includes everything between and including the brackets `{..}`.
```
		{
			"order": 6,		
			"url": "team-member",
			"name": "Team Member",
			"image": "team-member.jpg"
		},		
```
3. Remove their profile from your [Content Folder](../content/). Find their file name and delete it.
4. Remove their photo from your [Team Folder](../assets/team/). Find their file name and delete it.

