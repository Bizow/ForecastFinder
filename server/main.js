import {Meteor} from 'meteor/meteor';
import { HTTP } from 'meteor/http';

const apiUrl = "https://api.darksky.net/forecast";


Meteor.methods({
    getForecast(lat, lon) {
        const url = `${apiUrl}/${Meteor.settings.darkSkyKey}/${lat},${lon}`;
        const req = HTTP.get(url);
        if(req.statusCode !== 200){
            throw new Meteor.Error(req.statusCode, "Error");
        }
        return req.data;
    }
});