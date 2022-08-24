import Head from "next/head"
import Image from "next/image"
import Home from "../components/home/Home"
import Editor from "../components/editor/Editor"

export default function Index() {
  return (
    <>
      <Home />
      <Editor />
    </>
  )
}
