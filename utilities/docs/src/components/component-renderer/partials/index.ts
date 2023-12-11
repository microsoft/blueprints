import { ActionListTileComponent } from './action-list-tile';
import { AnatomyComponent } from './anatomy';
import { BookmarkTileComponent } from './bookmark-tile';
import { CodeSnippetComponent } from './code-snippet';
import { ComponentPreviewComponent } from './component-preview';
import { EmbedComponent } from './embed';
import { GuidanceComponent } from './guidance';
import { HeadingComponent } from './heading';
import { IllustrationTileComponent } from './illustration-tile';
import { ImageComponent } from './image';
import { ImageTileComponent } from './image-tile';
import { IntroductionTextComponent } from './introduction-text';
import { LinkComponent } from './link';
import { MarkListComponent } from './mark-list';
import { OrderedListComponent } from './ordered-list';
import { PersonTileComponent } from './person-tile';
import { PropTableComponent } from './prop-table';
import { RecommendationTileComponent } from './recommendation-tile';
import { SandboxComponent } from './sandbox';
import { TableListComponent } from './table-list';
import { TextComponent } from './text';

export const components = {
  'atoms.link': LinkComponent,
  'blocks.anatomy': AnatomyComponent,
  'blocks.code-snippet': CodeSnippetComponent,
  'blocks.component-preview': ComponentPreviewComponent,
  'blocks.embed': EmbedComponent,
  'blocks.guidance': GuidanceComponent,
  'blocks.heading': HeadingComponent,
  'blocks.image': ImageComponent,
  'blocks.introduction-text': IntroductionTextComponent,
  'blocks.prop-table': PropTableComponent,
  'blocks.sandbox': SandboxComponent,
  'blocks.text': TextComponent,
  'lists.mark-list': MarkListComponent,
  'lists.ordered-list': OrderedListComponent,
  'lists.table-list': TableListComponent,
  'tiles.action-list-tile': ActionListTileComponent,
  'tiles.bookmark-tile': BookmarkTileComponent,
  'tiles.illustration-tile': IllustrationTileComponent,
  'tiles.image-tile': ImageTileComponent,
  'tiles.person-tile': PersonTileComponent,
  'tiles.recommendation': RecommendationTileComponent,
};
