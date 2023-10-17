#Sal's Shipping
item_weight = float(input("## Welcome to Sal's Shipping ##"
                    "\nPlease insert the weight (pounds) of your item: "))

ground_shipping = 0
ground_shipping_premium = 0
drone_shipping = 0

if item_weight <= 2:
    ground_shipping = item_weight  * 1.5 + 20
    ground_shipping_premium = 125
    drone_shipping = item_weight * 4.5
elif (item_weight > 2) and (item_weight <= 6):
    ground_shipping = item_weight  * 3 + 20
    ground_shipping_premium = 125
    drone_shipping = item_weight * 9
elif (item_weight > 6) and (item_weight <= 10):
    ground_shipping = item_weight * 4 + 20
    ground_shipping_premium = 125
    drone_shipping = item_weight * 12
elif item_weight > 10:
    ground_shipping = item_weight * 4.75 + 20
    ground_shipping_premium = 125
    drone_shipping = item_weight * 14.25
else:
    print("Hey dev there is something going wrong with your conditions.")

method = ""
method_price = 0

if ground_shipping < ground_shipping_premium:
    method = "Ground Shipping"
    method_price = ground_shipping

    if ground_shipping < drone_shipping:
        method = "Ground Shipping"
        method_price = ground_shipping
    else:
        method = "Drone Shipping"
        method_price = drone_shipping

elif ground_shipping_premium < ground_shipping:
    method = "Ground Shipping Premium"
    method_price = ground_shipping_premium

    if ground_shipping_premium < drone_shipping:
        method = "Ground Shipping Premium"
        method_price = ground_shipping_premium
    else:
        method = "Drone Shipping"
        method_price = drone_shipping

elif drone_shipping < ground_shipping:
    if drone_shipping < ground_shipping_premium:
        method = "Drone Shipping"
        method_price = drone_shipping
    else:
        method = "Ground Shipping Premium"
        method_price = ground_shipping_premium
else:
    method = "ERROR"
    method_price = 0

print(f"ground shipping {ground_shipping}")
print(f"ground shipping premium {ground_shipping_premium}")
print(f"drone shipping {drone_shipping}")

print(f"For your package weighing {item_weight},"
      f" the cheapest method of shipping is: \n{method.upper()} and it costs ${method_price}  ")