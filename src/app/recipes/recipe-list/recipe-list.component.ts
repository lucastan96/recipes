import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Test Recipe',
            'This is simple a test recipe description',
            'https://www.maxpixel.net/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

}
