import {useRef, useState} from 'react'
import {useEffect} from 'react'
import useMediaQuery from './hooks/useMediaQuery'

import type {EditorState}from 'lexical'

import {LexicalComposer } from '@lexical/react/LexicalComposer'
import {ListPlugin } from '@lexical/react/LexicalListPlugin'
import {HorizontalRulePlugin} from '@lexical/react/LexicalHorizontalRulePlugin'
import {ClearEditorPlugin} from '@lexical/react/LexicalClearEditorPlugin'
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin'
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin'
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin'
import {TablePlugin} from '@lexical/react/LexicalTablePlugin'
import {CheckListPlugin}  from '@lexical/react/LexicalCheckListPlugin'
import {MarkdownShortcutPlugin} from '@lexical/react/LexicalMarkdownShortcutPlugin'
import {TRANSFORMERS} from '@lexical/markdown'
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'

import Nodes from './nodes'
import EditorTheme from './themes/EditorTheme'

import {Actions} from './Actions'
import DragDropPaste from './plugins/DragDropPastePlugin'
import FloatingLinkEditorPlugin from './plugins/FloatingLinkEditorPlugin'
import LinkPlugin from './plugins/LinkPlugin'
import ToolbarPlugin from './plugins/ToolbarPlugin'
import TreeViewPlugin from './plugins/TreeViewPlugin'
import ContentEditable from './ui/ContentEditable'
import Placeholder from './ui/Placeholder'
import LexicalAutoLinkPlugin from './plugins/AutoLinkPlugin/index'
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin'
import InlineImagePlugin from './plugins/InlineImagePlugin'
// import CodeActionMenuPlugin from './plugins/CodeActionMenuPlugin'

const loadContent = () => {
  // 'empty' editor
  const value = '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}'

  return value
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext()

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus()
  }, [editor])

  return null
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error)
}

export function Editor() {
  const isSmallWidthViewPort = useMediaQuery('(max-width: 1025px)')
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)
  const placeholder = <Placeholder>Enter some rich text...</Placeholder>
  const initialEditorState = loadContent()
  const editorStateRef = useRef<EditorState>()
  const initialConfig = {
    namespace: 'MyEditor', 
    editorState: initialEditorState,
    theme: EditorTheme,
    onError,
    nodes: [...Nodes],
    showTreeView: true,      
  }

  function handleOnChange(editorState: EditorState) {
    editorStateRef.current = editorState
  }

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-shell">
        <ToolbarPlugin/>
        <div
          className="editor-container tree-view">
          <ClearEditorPlugin/>
          <LexicalAutoLinkPlugin />
          <InlineImagePlugin />
          <CheckListPlugin />
          <RichTextPlugin
            contentEditable={
              <div className="editor-scroller">
                <div className="editor" ref={onRef}>
                  <ContentEditable />
                </div>
              </div>
            }
            placeholder={placeholder}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin onChange={handleOnChange}  />
          <HistoryPlugin />
          <MyCustomAutoFocusPlugin />
          <DragDropPaste/>
          <ListPlugin />
          <CodeHighlightPlugin />
          <TablePlugin hasCellMerge={true} hasCellBackgroundColor={true} />
          <HorizontalRulePlugin />
          <LinkPlugin />
          {floatingAnchorElem && !isSmallWidthViewPort && (
            <FloatingLinkEditorPlugin anchorElem={floatingAnchorElem} />
          )}
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <Actions />
          <TreeViewPlugin/>
        </div>
      </div>
    </LexicalComposer>
  )
}