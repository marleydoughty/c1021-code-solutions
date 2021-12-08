select "ct"."name" as "country",
        count ("c".*) as "citiesPerCountry"
from "countries" as "ct"
join "cities" as "c" using ("countryId")
group by "ct"."name";
