  // locations (name, street, city, state, zip, googleId, imageUrl)
/*var =[
{"White Water Rafting Center","5000 Whitewater Center Pkwy", "Charlotte", "NC","28214","google id","http://usnwc.org/wp-content/uploads/2014/12/AdvancedWWKayakCamp_2000x800.jpg"};
{"Merchants Millpond State Park", "176 Mill Pond Rd","Gatesville", "NC","27938","googleId", "https://www.ncparks.gov/sites/default/files/ncparks/park-images/memi-summerday_0.jpg"};
{"Price Lake", "BlueRidge Pkway", "NC","28607", "googleId", "http://www.blueridgemountains.com/images/lakeblueridge.jpg"};
{"Lake Johnson","4601 Avent Ferry Rd","Raleigh", "NC", "27606", "googleId","http://www.raleighnc.gov/content/ParksRec/Images/Parks/LakeJohnson/LJBanner.jpg"};
{"Lake Norman State Park","759 State Park Road", "Troutman", "NC","28166","googleId","https://www.ncparks.gov/sites/default/files/ncparks/park-images/lano-through-trees_0.jpg"};
{"Superior National Forest","8901 Grand Ave Place","Duluth", "MN",  "55808","googleid","https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5227052.jpg"};
{"Prince William Sound National Park","P.O. Box 129", "Forest Station Road", "Girdwood", "AK", "99587","googleid", "https://www.nationalforests.org/assets/images/_750x750_fit_center-center_80/2_Chugach-NF_Nellie-Juan-College-Fiord-Wilderness-Study-Area-2_Elisabeth-Gustafson_SMALL.jpg"};
{"Eldorado/Stanislaus National Forest","24695 Highway 108","Mi-Wuk Village", "CA", "95346","googleid", "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiF68bSq_XSAhVKSSYKHZBPD-IQjRwIBw&url=https%3A%2F%2Fwww.sierraforestlegacy.org%2FFC_ProjectsPlans%2FPR_CentralSierraNevadaLakeTahoeBasinProjects.php&psig=AFQjCNEGcg0ocE9V0WsDLZjoOj2-VQRibQ&ust=1490657847052504"};
{"Tahoe National Forest","631 Coyote St", "Nevada City", "CA", "95959","googleid","https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwidkfXerfXSAhUF3SYKHQqECFcQjRwIBw&url=https%3A%2F%2Fwww.tripadvisor.com%2FAttraction_Review-g32771-d103970-Reviews-Tahoe_National_Forest_Headquarters-Nevada_City_California.html&psig=AFQjCNF9D_vUDr17tg5baOurCyt_nvxzBg&ust=1490658479140927"};
{"Shasta-Trinity National Forest", "3644 Avtech Pkwy", "Redding", "CA","96002","googleid","https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.fs.usda.gov%2FInternet%2FFSE_MEDIA%2Fstelprdb5109889.jpg&imgrefurl=https%3A%2F%2Fwww.fs.usda.gov%2Frecarea%2Fstnf%2Frecarea%2F%3Frecid%3D6494&docid=1n6kSWZq6_v-pM&tbnid=38VlWq6NJEMxUM%3A&vet=10ahUKEwiPv6rkrvXSAhXSdSYKHYCpCIUQMwhrKDMwMw..i&w=1056&h=792&bih=860&biw=1578&q=Shasta-Trinity%20National%20Forest&ved=0ahUKEwiPv6rkrvXSAhXSdSYKHYCpCIUQMwhrKDMwMw&iact=mrc&uact=8"};
{"Klamath National Forest","XXX","Yreka", "CA", "96097","googleid","https://www.google.com/imgres?imgurl=http%3A%2F%2Fsmithriverwatershed.files.wordpress.com%2F2011%2F10%2Fsouth-kelsey-51.jpg&imgrefurl=http%3A%2F%2Fsmithriveralliance.org%2Fkelsey-trail%2F&docid=x0nqDjaBu2GhpM&tbnid=wlZte2JjyRcFWM%3A&vet=10ahUKEwitjanDr_XSAhUFMSYKHdJLAgAQMwg7KBAwEA..i&w=4000&h=3000&bih=860&biw=1578&q=Klamath%20National%20Forest&ved=0ahUKEwitjanDr_XSAhUFMSYKHdJLAgAQMwg7KBAwEA&iact=mrc&uact=8"};
{"Devils Gut/Roanoke River","XXX","Jamesville","NC","29762","googleid","https://d3m7xw68ay40x8.cloudfront.net/assets/2016/05/17085140/kayaking-feature-image.jpg"};
{"Pharr Family Preserve-Riverbend Farm","9111 Mount Pleasant Road South", "Midland", "NC", "28107","googleid","https://www.carolinathreadtrailmap.org/images/trails/trail-system/Pharr3-57-2.jpg"};
{"Cheoah River","15152 Tapoco Rd", "Robbinsville", "NC", "28771","googleid","http://www.americanwhitewater.org/photos/archive/medium/12222.jpg"};
{"Shanadoah River Launch","350 Daughter of Stars Dr", "Bentonville", "VA", "22610", "googleid","https://www.flickr.com/photos/vadcr/14160030449/in/album-72157603478878746/"}]
   */
 // difficulty ratings (id,rapid class)
 [{1,5}, {2,1},{3,1},{4,2},{5,1},{6,1},{7,3},{8,2},{9,2},{10,3},{11,2},{12,3},{13,1},{14,3},{15,4}]
// rental (id, 1=yes,0=no)
 [[{1,1}, {2,1},{3,1},{4,0},{5,0},{6,1},{7,0},{8,1},{9,0},{10,1},{11,1},{12,1},{13,1},{14,0},{15,0}]
 //comments (id,comments associated with each location)
 [{1,"My family loved all of the other options as well as the kayaking."},
 {1,"The rapids were really challenging. My teenagers didn't even complain about the family time!"},
 {2,"This is one of those places that nobody knows about-it is a real gem."},
 {3,"Gorgeous but not much there-make sure that your tank is full."},
 {4,"Great for that quick trip and close to the Raleigh attractions."},{5,"Close enough to Charlotte that we can be in the water in an hour."},
 {5,"Watch out for the other boats on the water!"},
 {6,"Beautiful but watch the weather-changes quickly."},
 {7,"Alaska can't be beat for the beautiful scenery."},
 {8,"California-Need I say more?"},
 {8,"Pretty low-key for California."},
 {9,"This is a great place for people that are just learning. Good Facilities."},
 {10,"Good launch site"},
 {11,"Both river camping platforms in Devil’s Gut give you quiet solitude, an ideal place to find wildlife and old growth trees. Kayaking or canoeing to either makes for an easy and scenic day paddle."},
{11,"If you’re paddling here for a day trip, you’ll want to use restrooms before arriving at the boat ramp"},
 {12,"This undammed blueway provides long distance flatwater kayaking and canoeing opportunities. "},
 {13,"This is historically relevant as the Little Meadow Creek was the site of the America’s first Gold Rush"},
 {14,"Because of the trees and brush, it is not a good place to paddle if you don't have a rock-solid roll and the ability to read water well on the fly" },
 {15,"In addition to meandering river frontage, the park offers scenic views of Massanutten Mountain to the west and Shenandoah National Park to the east."},
 {15, "A large riverside picnic area, picnic shelters, trails, river access and a car-top boat launch make this a popular destination for families, anglers and canoeists."}]
