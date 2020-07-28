import { IResolvers } from 'graphql-tools';
import { dataSources } from '../data/index';
import { getWikipediaMobile } from '../lib/utils';

const type: IResolvers = {
   Season:{
       year: parent => parent.season,
       urlMobile: parent => getWikipediaMobile(parent.url)
   }
};

export default type;