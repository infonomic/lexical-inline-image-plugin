/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {Klass, LexicalNode} from 'lexical'

import {CodeHighlightNode, CodeNode} from '@lexical/code'
import {AutoLinkNode, LinkNode} from '@lexical/link'
import {ListItemNode, ListNode} from '@lexical/list'
import {MarkNode} from '@lexical/mark'
import {OverflowNode} from '@lexical/overflow'
import {HorizontalRuleNode} from '@lexical/react/LexicalHorizontalRuleNode'
import {HeadingNode, QuoteNode} from '@lexical/rich-text'
import {TableNode, TableCellNode, TableRowNode} from '@lexical/table'

import {EmojiNode} from './EmojiNode'
import {InlineImageNode} from './InlineImageNode'
import {TweetNode} from './TweetNode'
import {YouTubeNode} from './YouTubeNode'

const Nodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  CodeNode,
  TableNode,
  TableCellNode,
  TableRowNode,
  CodeHighlightNode,
  AutoLinkNode,
  LinkNode,
  OverflowNode,
  InlineImageNode,
  EmojiNode,
  HorizontalRuleNode,
  TweetNode,
  YouTubeNode,
  MarkNode,
]

export default Nodes
