<template>
  <div
    class="container"
    style="padding: 85px;"
    font-family="Comic Sans MS, Comic Sans, cursive"
  >
    <CBox mx="20%" align="center">
      <div v-if="pesq">
        <CSimpleGrid
          columns="2"
          font-family="Comic Sans MS, Comic Sans, cursive"
          spacing="25"
          style="
            display: grid;
            grid-template-columns: auto auto;
            padding: 10px;
          "
        >
          <CBox width="100px" text-align="center" style="margin-left: 15vw;">
            <img
              :src="profile.icone"
              alt="Card image cap"
              style="
                border-radius: 25px;
                min-width: 80px;
                margin-top: 6px;
                margin-bottom: 6px;
              "
            />
            <h4
              class="text-center"
              font-family="Comic Sans MS, Comic Sans, cursive"
            >
              {{ profile.nickname }}
            </h4>
          </CBox>
          <CBox width="100px" text-align="center">
            <div class="card-body">
              <img :src="getImg(elo.img)" class="img-circle2" />
              <h4 class="text-center">{{ elo.nome }} {{ elo.rank }}</h4>
            </div>
          </CBox>
        </CSimpleGrid>
      </div>
      <div v-else>
        <h1
          class="text-center"
          font-family="Comic Sans MS, Comic Sans, cursive"
        >
          SEM RESULTADOS
        </h1>
      </div>
      <div
        v-for="(partida, a) in matches"
        :key="a"
        :style="cores[a]"
        class="card mb-2"
        style="
          border-radius: 5px;
          margin-top: 10px;
          display: grid;
          grid-template-columns: auto auto;
          padding: 10px;
        "
      >
        <div class="d-flex flex-column align-items-center float-left p-0">
          <img
            class="w-50 rounded-circle"
            :src="cha(partida.championName, 'img')"
            style="width: 100px;"
          />
          <h4>{{ cha(partida.championName, "nome") }}</h4>
        </div>
        <div class="d-flex flex-column align-items-center float-left p-0">
          <h5>{{ queu(partida.queue, "m") }}</h5>
          <h5>{{ queu(partida.queue, "q") }}</h5>
          <h5>
            {{ partida.kills }} /
            <span v-if="partida.kills < partida.deaths" style="color: red;">
              {{ partida.deaths }} </span
            ><span v-else> {{ partida.deaths }} </span> / {{ partida.assists }}
          </h5>
        </div>
      </div>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
} from "@chakra-ui/vue";
import axios from "axios";


const key = 'RGAPI-9bf2f047-7417-4716-a571-2806e69468b6';

export default {
  name: 'App',
  components: {
    CBox,
  },
  data(){
    return{
        pesq: false,
        profile:
            {
                nickname: '',
                icone: 'http://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/29.png'
            },
        elo:{
            nome:'',
            img:'UNRANKED.png',
            rank:''
        },
        partidas:[],
        api:{
            url: 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
            headers: {
                    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Origin": "https://developer.riotgames.com",
                    "X-Riot-Token": key
            }
        },
        partidasid:{},
        champs:[],
        champsnovo:[],
        queues:[],
        matches:[],
        cores:[{backgroundColor: 'red'}]
      }
  },
  mounted () {
      axios.get(`https://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json`)
      .then(response4 => {
          this.champs = Object.entries(response4.data.data);
      })
      axios.get(`http://static.developer.riotgames.com/docs/lol/queues.json`)
      .then(response5 => {
          this.queues = response5.data;
      })
      this.search()
  },
  watch:{
    searchn(){
      this.search()
    }
  },
  computed:{
    searchn() {
      return this.$store.state.campeao.searchn;
    },
  },
  methods:{
      getImg(link){
        return require(`../assets/${link}`);
      },
      cor(a){
          axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/${a}?api_key=${key}`, {
                      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
                      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                      "Origin": "https://developer.riotgames.com"
                  })
          .then(response5 => {
              this.partidasid = response5.data.info;
              const c = this.partidasid.participants.filter(num => num.summonerName === this.profile.nickname);
              c[0].queue = this.partidasid.queueId;
              console.log(c[0]);
              this.matches.push(c[0])
              if(c[0].win === true){
                  this.cores.push( {backgroundColor: '#7072fd'});
              }else{
                  this.cores.push( {backgroundColor: '#fd7272'});
              }
          })
      },
      queu(a,b){
          if(b === 'q'){
          a = this.queues.filter(num => num.queueId === a);
          return a[0].description;
          }
          else if(b === 'm'){
              a = this.queues.filter(num => num.queueId === a);
              return a[0].map;
          }
      },
      cha(a,b){
          if(b === 'nome'){
              const c = this.champs.filter(num => num[0].toUpperCase() === a.toUpperCase());
              return c[0][0];
          }
          else if(b === 'img'){
              console.log(a.toUpperCase(),this.champs[123][0].toUpperCase())
              const c = this.champs.filter(num => num[0].toUpperCase() === a.toUpperCase());
              console.log(c)
              return `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/${c[0][1].image.full}`;

          }
      },
      search(){
          this.pesq = false;
          this.matches = [];
          this.cores = [];
          if(this.searchn !== ''){
          axios.get(`${this.api.url}${this.searchn}?api_key=${key}`, this.api.headers)
          .then(response => {
          this.profile = {
              icone: `http://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${response.data.profileIconId}.png`,
              nickname: response.data.name,
              id: response.data.id,
              idA: response.data.accountId,
              puuid: response.data.puuid
          }
          axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.profile.id}?api_key=${key}`, this.api.headers)
          .then(response2 => {
              if(response2.data[0]){
                  this.elo = {
                          nome: response2.data[0].tier,
                          img : `${response2.data[0].tier}.png`,
                          rank: response2.data[0].rank
                      }
              }else{
                  this.elo = {
                          nome: 'Sem rank',
                          img : 'UNRANKED.png',
                          rank: ''
                      }
              }
              this.pesq = true;
          })
          axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.profile.puuid}/ids?count=10&api_key=${key}`, this.api.headers)
          .then(response3 => {
              this.partidas = response3.data;
              this.pesq = true;
              this.partidas.forEach(async p => {
                  await this.cor(p);
              });
          })
          })
          }
      }
  },
}
</script>
