# animal-finder-client




Get Animal Breeds
GET https://api.petfinder.com/v2/types/{type}/breeds

size
small, medium, large, xlarge Accepts multiple values, e.g. size=large,xlarge

gender
male, female, unknown Accepts multiple values, e.g. gender=male,female

age
adult, senior

status
adoptable

organization
Accepts multiple values, e.g. organization=[ID1],[ID2]

good_with_children
Can be true, false, 1, or 0

good_with_dogs
Can be true, false, 1, or 0

good_with_cats
Can be true, false, 1, or 0

location
city, state; latitude,longitude; or postal code.

distance
requires location to be set (default: 100, max: 500)

sort
recent, -recent, distance, -distance, random (default: recent)

page
(default:1)

limit
(default: 20, max: 100)




