import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import AccountStack from './AccountStack'
import FavoritesStack from './FavoritesStack'
import SearchStack from './SearchStack'
import TopRestaurantsStack from './TopRestaurantsStack'
import RestaurantsStack from './RestaurantsStack'



const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{title:"Restaurantes"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{ title: "Cuenta"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options ={{title: "Favoritos"}}
                />
                <Tab.Screen
                    name="search"
                    component={SearchStack}
                    options ={{ title: "Buscar" }}
                />
                <Tab.Screen
                    name="topRestaurants"
                    component={TopRestaurantsStack}
                    options ={{title: "TopRestaurantes"}}
                />
                //capitulo 31 me quede porfavoconteo de nuebo 
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}



