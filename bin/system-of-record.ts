#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SystemOfRecordStack } from '../lib/system-of-record-stack';

const app = new cdk.App();
new SystemOfRecordStack(app, 'SystemOfRecordStack');
