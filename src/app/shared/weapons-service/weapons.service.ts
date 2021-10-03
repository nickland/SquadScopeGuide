import { Injectable } from '@angular/core';
import { fixtures } from "../../../assets/fixtures";

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor() { }

  /**
   * Get ranging options for a weapon
   * @param weaponName
   */
  getRangingsForWeapon(weaponName: string): Array<number> {
    for (let weapon of fixtures.weapons) {
      if (weapon.weapon === weaponName && weapon.has_ranging) {
        return weapon.ranging_options;
      }
    }
    return [];
  }

  /**
   * Check if a weapon even has ranging options
   * @param weaponName Name of the weapon
   */
  weaponHasRangingOptions(weaponName: string): boolean {
    for (let weapon of fixtures.weapons) {
      if (weapon.weapon === weaponName && weapon.has_ranging) {
        return true;
      }
    }
    return false;
  }

  /**
   * Returns the filename of a giving weapon for their ranging
   * @param weaponName Name of the weapon
   * @param ranging The ranging image to look for
   */
  getFileNameForWeaponAndRanging(weaponName: string, ranging: number | null): string {
    for (let weapon of fixtures.weapons) {
      if (weapon.weapon === weaponName) {
        let fileOptions = weapon.filenames;
        for (let option of fileOptions) {
          if (option.range === ranging) {
            return option.filename;
          }
        }
      }
    }
    return "buggyMess.jpg";
  }
}
