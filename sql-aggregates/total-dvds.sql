select count(*) as "totalDvds"
from "inventory"
join "stores" using ("storeId");
