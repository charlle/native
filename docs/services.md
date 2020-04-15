### Legal Services
You can edit or add legal services to your website. 
- [Edit Service](#edit)
- [Add Service](#add)
- [Remove Service](#remove)


#### Edit
When you need to edit one of your publications, navigate to your [Content](../content/) folder. Find the name of the article. Click the edit icon on the page and simply write. Some formatting tips:
- Use 1 - 6 # for headers
	- Recommend ### for Page Headers
	- Recommend #### for Paragraph Headers
- Write text to create paragraphs.
```
### Immigration
I wanted to add a paragraph to this file.

This will be a new paragraph from the one above.

```
- Use hyphens `-` to create lists
```
### Steps To Visa
- Call TMCT
- Send us your information
- Prepare letters
```

#### Add
When you want to add a service, simply add a new file to your [Content](../content/) folder. Make sure that the file has the extension *md* for exmaple `file-name.md`. Once you are ready to publish your new service, add it to your [Target List](../content/targets/targets.js).
1. Add a new `file-name.md`
2. Add the name of the file to your targets list
	- Include under the `"services"` list
	- The order matters and will be used for display
	- If you add it to the end of the list, make sure it does not have a comma
```
export const targets = 
{
	"services": [
		"immigration",
		"file-name",	<-- add file name
		"family-office",
		"mediation"		<-- last item doesn't need ,
		],
		...
}
```


#### Remove
Follow these steps to remove a legal service from your website. 
1. Remove the permanent link. Go to [Targets](../content/targets/targets.js) and delete the file name. Remove the whole line, `"student-visa",`. Ensure that the last item on the list does not have a comma.
```
export const targets = 
{
	"services": [
		"immigration",
		"student-visa",		<-- remove the whole line
		"arbitration",
		"mediation"				<-- last item doesn't need ,
		], 
		...
}
```
2. Remove the actually file. Go to [Content](../content/), which is in the same directory as Targets. Search for the file name of the service that you want to remove and delete it. 

*CAUTION*: Some of these files may have external links or be referenced through search engines like Google.com. I would recommend only removing a file when absolutely necessary.