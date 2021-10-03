import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { WeaponsService } from "./shared/weapons-service/weapons.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Squad Game Scope Guide for Anti Tank';
  teamForm = this.fb.group({
    team: ['']
  })
  weaponForm = this.fb.group({
    weapon: ['']
  })
  rangingForm = this.fb.group({
    ranging: ['']
  })

  imageSource = "";

  constructor(public fb: FormBuilder, public weaponService: WeaponsService) {

  }

  /**
   * Fires everytime the Team select element changes
   * @param event
   */
  teamChangeHandler(event: any): void {
    // event.target.value contains the value of the select element
    if (event.target.value && event.target.value != "") {
      this.teamForm.controls.team.setValue(event.target.value);
      console.debug(`New team selection: ${this.teamForm.controls.team.value}`);
      this.weaponForm.reset();
      this.rangingForm.reset();
      this.updateImageSource();
    }
  }

  /**
   * Fires everytime the Weapon select element changes
   * @param event
   */
  weaponChangeHandler(event: any): void {
    // event.target.value contains the value of the select element
    if (event.target.value && event.target.value != "") {
      this.weaponForm.controls.weapon.setValue(event.target.value);
      let weapon = this.weaponForm.controls.weapon.value
      let weaponHasRangingOptions = this.weaponService.weaponHasRangingOptions(weapon)
      console.debug(`New weapon selection: ${weapon}`);
      console.debug(`Additional Ranging? ${weaponHasRangingOptions}`)
      this.rangingForm.reset();
      if (!weaponHasRangingOptions) {
        this.updateImageSource();
      }
      this.updateImageSource();
    }
  }

  /**
   * Fires everytime the ranging select element changes
   * @param event
   */
  rangingChangeHandler(event: any): void {
    // event.target.value contains the value of the select element
    if (event.target.value && event.target.value != "") {
      this.rangingForm.controls.ranging.setValue(event.target.value);
      console.debug(`New ranging selection ${this.rangingForm.controls.ranging.value}`)
      this.updateImageSource();
    }
  }

  /**
   * Will update the image source.
   */
  updateImageSource(): void {
    let weapon = this.weaponForm.controls.weapon.value;
    let hasRangingOptions = this.weaponService.weaponHasRangingOptions(weapon)
    let ranging: number | null = parseInt(this.rangingForm.controls.ranging.value);
    if (!hasRangingOptions) {
      // In our fixtures, weapons that dont have ranging options have a default fileoption with the ranging of null
      ranging = null;
    }
    console.debug(`Updating image source for range ${ranging} and weapon ${weapon}`)
    this.imageSource = `assets/scopes/${this.weaponService.getFileNameForWeaponAndRanging(
      weapon,
      ranging,
    )}`
  }
}
