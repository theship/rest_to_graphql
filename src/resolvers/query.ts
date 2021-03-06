import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async seasonsList(_: void, __:any, {dataSources}){
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            );
        },
        async racesByYear(_: void, {year}, {dataSources}){
            return await dataSources.races.getRacesByYear(year).then(
                (data: any) => data.MRData.RaceTable.Races
            );
        },

        async raceSelect(_: void, {year, round}, {dataSources}){
            return await dataSources.races.getRacesByYearAndRound(year, round).then(
                (data: any) => data.MRData.RaceTable.Races[0]
            );
        }
    }
};

export default query;