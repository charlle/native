### Edit Profile
You can edit or update your personal profile. This includes writing a biography, updating your credentials, changing your photo or even your personal details.
- [Your Details](#details)
- [Your Content](#content)
- [Your Photo](#photo)

#### Details
In order to edit your details you need to open up the [team.js File](/content/targets/team.js). You will should be able to find your name and personal details there. It will look something like this.
```
{
	"order": 1,
	"url": "cherish-thompson",
	"name": "Cherish Thompson", 	<-- Edit your name here
	"title": "Managing Partner", 	<-- Change your title
	"city": "London",
	"phone": "+44 949-292-9953",
	"email": "cthompson@tmct.law",
	"image": "test.jpg" 					<-- Does not take a comman
}
```
*Becareful not to mess up the formatting* that will break the page. Edit your information within the quotes and leave the rest as it is.

#### Content
If you would like to update or edit your professional profile, navigate to the [content folder](/content). You should _find a file with your name on it_. *Do not change the file name*. Your content should look like this.
```
### Profile
John Smith's practice focuses on advising clients in all capacities from alternative dispute resolution to commercial litigation, bankruptcy, and appeals. 

I went to Harvard and I love to travel.


**** 								<-- This creates a page break


### Credentials 						<-- 3(#) is a page header

#### Education 							<-- 4(#) is a paragraph header
- Haravard, School of Law
- Johns Hopkins							<-- A hypen will create a list


```
- Use a *#* to create a *Header*
	- You can use from 1 - 6 #'s
	- Recommend: 3 for page headers & 4 for paragraph headers
- Use `****` to create page breaks
- Use a hypen `-` to create a list of items
- Simply write text to create a paragraph
- For links and images see below.

##### Links
You can add links directly into the body of your paragraphs. Copy the line below and edit the URL and the Text. You can copy URLs directly from your browser and label your link with any text that you want. The example below has the `URL = https://google.com` and `TEXT = Google`.
```
<a href="https://google.com">Google</a>
```

##### Images
You can also add images to your paragraphs or in between them. Upload a photo to your [Image Folder](../assets/img/). Copy the format below and place any where you would like an image. Edit the *src* and *alt* properties. The src should equal this format `assets/img/file-name.jpg`. Make sure the extension matches your photo's file format, example jpg, png, gif. You can name the photo in the *alt* property. They will automatically appear formatted in the body of your content.
```
<img src="assets/img/home-tower.jpg" alt="Tower" />
```



#### Photo
Changing your photo is simple. All team photos are stored here [assets/team](/assets/team). You should see a file with your name on it. All you have to do is upload the photo you want to this directory and you are done! The two things that you need to watch out for are:
1. Make sure you use the same file name.
2. Make sure the photo is the same format, i.e. png, jpg, ...




