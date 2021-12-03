select "c"."customerId" as "customers",
       "c"."firstName",
       "c"."lastName",
      "p"."customerId" as "payments",
        "p"."amount"
from "customers" as "c"
join "payments" as "p" using ("customerId")
order by "p"."amount" desc
limit 10;
