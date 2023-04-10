import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import ListItem from "../Sidebar-List-Item/ListItem";
const ListFormat = ({check}) => {
  return (
    <>
      <ul className="List-wrapper">
        <ListItem
          ListClass="aa"
          LinkIcon="bi bi-house-door"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          textCss="text1"
          text={check ?  "Home": ""}
          street="/"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-explicit"
          textCss="text1"
          text={check ? "Explores" : ""}
          street="/tests2"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-fast-forward-circle"
          textCss="text1"
          text={check && "Shorts"}
          street="/tests3"
        />
      </ul>
      <span className="bloc"></span>
      <ul className="List-wrapper">
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-collection-play"
          textCss="text1"
          text={check && "library"}
          street="/tests5"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-clock-history"
          textCss="text1"
          text={check && "history"}
          street="/tests26"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-play-btn"
          textCss="text1"
          text={check && "your videos"}
          street="/tests3786"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-stopwatch"
          textCss="text1"
          text={check && "watch later"}
          street="/tests378"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-hand-thumbs-up"
          textCss="text1"
          text={check && "like video"}
          street="/tests379"
        />
      </ul>
      <span className="bloc"></span>
      <h6 className="subscriptions">{check && "Subscriptions" }</h6>
      <ul className="List-wrapper">
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-github"
          textCss="text1"
          text={check && "Github"}
          street="/tests54"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-linkedin"
          textCss="text1"
          text={check && "Linkedin"}
          street="/tests269"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-twitter"
          textCss="text1"
          text={check && "twitter "}
          street="/tests37860"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-instagram"
          textCss="text1"
          text={check && "instagram"}
          street="/tests3785"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-telegram"
          textCss="text1"
          text={check && "Telegram"}
          street="/tests3794"
        />
      </ul>
      <span className="bloc"></span>
      <h6 className="subscriptions">{check && "Explore" }</h6>
      <ul className="List-wrapper">
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-github"
          textCss="text1"
          text={check && "trending"}
          street="/tests545"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " ";
          }}
          LinkIcon="bi bi-music-note"
          textCss="text1"
          text={check && "Music"}
          street="/testsqwd269"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-activity"
          textCss="text1"
          text={check && "Live"}
          street="/tests3casc7860"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-controller"
          textCss="text1"
          text={check && "gaming"}
          street="/tesaxsts3785"
        />{" "}
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-newspaper"
          textCss="text1"
          text={check && "news"}
          street="/tests379df45w"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-award"
          textCss="text1"
          text={check && "sports"}
          street="/tests37321948"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-lightbulb"
          textCss="text1"
          text={check && "learning"}
          street="/tests373946"
        />
        <ListItem
          ListClass="aa"
          ListLink={({ isActive }) => {
            isActive ? "bb isActiveColor" : " text-dark";
          }}
          LinkIcon="bi bi-bag"
          textCss="text1"
          text={check && "fashion & beauty"}
          street="/tests379425"
        />
      </ul>
    </>
  );
};
export default ListFormat;
