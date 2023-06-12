import { ActionListTileComponent } from './action-list-tile';
import { BookmarkTileComponent } from './bookmark-tile';
import { CodeSnippetComponent } from './code-snippet';
import { ComponentPreviewComponent } from './component-preview';
import { EmbedComponent } from './embed';
import { GuidanceComponent } from './guidance';
import { HeadingComponent } from './heading';
import { IllustrationTileComponent } from './illustration-tile';
import { ImageComponent } from './image';
import { ImageTileComponent } from './image-tile';
import { LinkComponent } from './link';
import { MarkListComponent } from './mark-list';
import { OrderedListComponent } from './ordered-list';
import { PersonTileComponent } from './person-tile';
import { PropTableComponent } from './prop-table';
import { RecommendationTileComponent } from './recommendation-tile';
import { TextComponent } from './text';

export const components = {
  'atoms.link': LinkComponent,
  'blocks.code-snippet': CodeSnippetComponent,
  'blocks.component-preview': ComponentPreviewComponent,
  'blocks.embed': EmbedComponent,
  'blocks.guidance': GuidanceComponent,
  'blocks.heading': HeadingComponent,
  'blocks.image': ImageComponent,
  'blocks.prop-table': PropTableComponent,
  'blocks.text': TextComponent,
  'lists.mark-list': MarkListComponent,
  'lists.ordered-list': OrderedListComponent,
  'tiles.action-list-tile': ActionListTileComponent,
  'tiles.bookmark-tile': BookmarkTileComponent,
  'tiles.illustration-tile': IllustrationTileComponent,
  'tiles.image-tile': ImageTileComponent,
  'tiles.person-tile': PersonTileComponent,
  'tiles.recommendation': RecommendationTileComponent,
};
