import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2"

const generations = {
    gen1: {
      start: 0,
      end: 151,
    },
    gen2: {
      start: 152,
      end: 251
    }
  }

class PokeAPI extends Component {
    constructor(props){
        super(props);

        this.state = {
            allPokemonsG1: [],
            allPokemonsG2: [],
            selectedPokemonPhoto: '',
            selectPokemonGeneration: "I"
        }
    }

    fetchAllG1Pokemons = async () => {
        const response = await axios.get(`${baseURL}/pokemon?limit=151`)
        console.log(response.data)
        this.setState({ allPokemonsG1: response.data.results })
    }

    fetchAllG2Pokemons = async () => {
        const response = await axios.get(`${baseURL}/pokemon?offset=151&limit=100`)
        console.log(response.data)
        this.setState({ allPokemonsG2: response.data.results })
        
    }

    componentDidMount(){
        this.fetchAllG1Pokemons();
        this.fetchAllG2Pokemons();
    }

    fetchPokemonDetails = async (event) => {
        const pokemonDetailsURL = event.target.value;
        const response = await axios.get(pokemonDetailsURL);
        const photoURL = response.data.sprites.front_default;
        this.setState({ selectedPokemonPhoto: photoURL });
    }

    fetchGeneration = async (event) => {
       const pokeGeneration = event.target.value
       const response = await axios.get(pokeGeneration)
    }

    render(){
        const isPokemonSelected = this.state.selectedPokemonPhoto !== '';
        return(
            <div>
                <select onChange={this.fetchGeneration}>
                    <option>Selecione uma Geração</option>
                    {/* {this.state.selectPokemonGeneration.map((generation) =>)} */}
                </select>
                <select onChange={this.fetchPokemonDetails}>
                    <option>Selecione um Pokémon</option>
                    {this.state.allPokemonsG1.map((pokemon) => (<option value={pokemon.url}>{pokemon.name}</option>))}
                </select>
                <hr/>
                { isPokemonSelected && (<img src={this.state.selectedPokemonPhoto} alt="Foto do Pokémon"/>)}
            </div>
        )
    }
}

export default PokeAPI;