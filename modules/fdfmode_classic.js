/**
 * MODE: Follow-Defollow Mode
 * =====================
 * follow-defollow following users (ignore users in whitelist) 
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
class Fdfmode_classic {
    constructor(bot, config, utils) {
        this.bot = bot;
        this.config = config;
        this.utils = utils;
    }
}

module.exports = (bot, config, utils) => { return new Fdfmode_classic(bot, config, utils); };